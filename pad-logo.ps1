Add-Type -AssemblyName System.Drawing
$inPath = "c:\Users\LYKART06\Downloads\Music\New folder\THE-OWA-TECHNOLOGIES-OFFICIAL-WEBSITE-main\public\assets\owa_logo.jpg"
$outPath = "c:\Users\LYKART06\Downloads\Music\New folder\THE-OWA-TECHNOLOGIES-OFFICIAL-WEBSITE-main\public\assets\owa_profile_logo.jpg"

$img = [System.Drawing.Image]::FromFile($inPath)
$maxSize = [Math]::Max($img.Width, $img.Height)
$canvasSize = [int]($maxSize * 1.45) # Give it 45% padding so it easily fits inside a circular mask

$bmp = New-Object System.Drawing.Bitmap($canvasSize, $canvasSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)

$x = [int](($canvasSize - $img.Width) / 2)
$y = [int](($canvasSize - $img.Height) / 2)

$g.DrawImage($img, $x, $y, $img.Width, $img.Height)
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host "Logo successfully padded and saved as owa_profile_logo.jpg"
