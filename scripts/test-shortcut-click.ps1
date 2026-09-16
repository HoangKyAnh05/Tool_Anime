$ErrorActionPreference = "Stop"

Stop-Process -Name "electron" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

Write-Host "Simulating double-click on D:\Desktop\IELTS Anime Light Novel.lnk..."
Invoke-Item "D:\Desktop\IELTS Anime Light Novel.lnk"

Start-Sleep -Seconds 3

$proc = Get-Process -Name "electron" -ErrorAction SilentlyContinue
if ($proc -ne $null) {
    Write-Host "SUCCESS: Desktop shortcut double-click launched Electron successfully! Found $($proc.Count) processes."
    $proc | Select-Object Id, ProcessName, MainWindowTitle, MainWindowHandle | Format-Table
    exit 0
} else {
    Write-Host "FAILED: Process not running."
    exit 1
}
