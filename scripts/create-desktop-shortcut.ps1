$ErrorActionPreference = "SilentlyContinue"

$appDir = "E:\code_tino_19_4\Code_Tool_Python\Tool_Anime"
$electronExe = Join-Path $appDir "node_modules\electron\dist\electron.exe"
$icoPath = Join-Path $appDir "assets\icon.ico"

# Target desktop directories: check both D:\Desktop and UserProfile Desktop
$desktops = @("D:\Desktop", [System.Environment]::GetFolderPath('Desktop'), [System.IO.Path]::Combine($env:USERPROFILE, "Desktop")) | Select-Object -Unique

$WshShell = New-Object -ComObject WScript.Shell

foreach ($d in $desktops) {
    if (Test-Path $d) {
        $shortcutPath = Join-Path $d "IELTS Anime Light Novel.lnk"
        $shortcut = $WshShell.CreateShortcut($shortcutPath)
        $shortcut.TargetPath = $electronExe
        $shortcut.Arguments = "`"$appDir`""
        $shortcut.WorkingDirectory = $appDir
        $shortcut.Description = "IELTS Anime Light Novel - Chinh Phục IELTS 8.0"
        $shortcut.IconLocation = "$icoPath,0"
        $shortcut.Save()
        Write-Host "Created direct shortcut at: $shortcutPath"
    }
}
