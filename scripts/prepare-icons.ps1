$ErrorActionPreference = "Stop"
$destDir = "e:\code_tino_19_4\Code_Tool_Python\Tool_Anime\assets"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$source = "C:\Users\Admin\.gemini\antigravity-ide\brain\216c940a-6766-4efc-8e70-b8cb58294cab\ielts_anime_icon_1789564173456.jpg"
$destPng = Join-Path $destDir "icon.png"
$destIco = Join-Path $destDir "icon.ico"

Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($source)
$img.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp = New-Object System.Drawing.Bitmap 256, 256
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($img, 0, 0, 256, 256)
$g.Dispose()

$hIcon = $bmp.GetHicon()
$ico = [System.Drawing.Icon]::FromHandle($hIcon)
$fs = New-Object System.IO.FileStream $destIco, ([System.IO.FileMode]::Create)
$ico.Save($fs)
$fs.Close()
$fs.Dispose()
$ico.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Icons generated successfully at $destPng and $destIco"
