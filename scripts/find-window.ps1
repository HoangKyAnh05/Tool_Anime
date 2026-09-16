Add-Type @'
  using System;
  using System.Runtime.InteropServices;
  using System.Text;
  public class WindowFinder {
    [DllImport("user32.dll")]
    public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
    [DllImport("user32.dll")]
    public static extern int GetWindowText(IntPtr hWnd, StringBuilder strText, int maxCount);
    [DllImport("user32.dll")]
    public static extern bool IsWindowVisible(IntPtr hWnd);
  }
'@

[WindowFinder]::EnumWindows({
  param($hwnd, $lparam)
  $sb = New-Object System.Text.StringBuilder 256
  [WindowFinder]::GetWindowText($hwnd, $sb, 256) | Out-Null
  $txt = $sb.ToString()
  if ($txt -match "IELTS") {
    $vis = [WindowFinder]::IsWindowVisible($hwnd)
    Write-Host "FOUND IELTS WINDOW: '$txt' (Visible: $vis)"
  }
  return $true
}, [IntPtr]::Zero)
