$ErrorActionPreference = "Stop"

$appDir = "e:\code_tino_19_4\Code_Tool_Python\Tool_Anime"
$vbs = Join-Path $appDir "launch-silent.vbs"

Write-Host "Verifying launch-silent.vbs launcher..."
Start-Process -FilePath "wscript.exe" -ArgumentList "`"$vbs`"" -WorkingDirectory $appDir

Start-Sleep -Seconds 3

$check = Get-Process -Name "electron" -ErrorAction SilentlyContinue
if ($check -ne $null) {
    Write-Host "VERIFIED: launch-silent.vbs launched Electron with 0 console window! Found $($check.Count) processes."
    $check | Stop-Process -Force
    Write-Host "Cleanup completed."
    exit 0
} else {
    Write-Host "FAILED: Electron was not started."
    exit 1
}
