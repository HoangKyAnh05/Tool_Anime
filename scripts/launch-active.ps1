$ErrorActionPreference = "SilentlyContinue"

Stop-Process -Name "electron" -Force
Start-Sleep -Milliseconds 800

$appDir = "E:\code_tino_19_4\Code_Tool_Python\Tool_Anime"
$electronExe = Join-Path $appDir "node_modules\electron\dist\electron.exe"

Start-Process -FilePath $electronExe -ArgumentList "`"$appDir`"" -WorkingDirectory $appDir

Start-Sleep -Seconds 2

$proc = Get-Process -Name "electron" -ErrorAction SilentlyContinue
if ($proc) {
    Write-Host "App launched and running with active window!"
}
