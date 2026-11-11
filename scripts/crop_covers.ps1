Add-Type -AssemblyName System.Drawing

$hadithImg = [System.Drawing.Image]::FromFile('C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\hadith_books_row.jpg')
$names = @('bukhari', 'muslim', 'abudaud', 'tirmidzi', 'nasai', 'ibnumajah', 'malik', 'ahmad', 'darimi')

$w = 100
$h = 162
$y = 8
$step = 1024 / 9

for ($i = 0; $i -lt 9; $i++) {
    $x = [int]($i * $step + 7)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($hadithImg, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $outPath = "C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\hadith_" + $names[$i] + ".jpg"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
}
$hadithImg.Dispose()

$quranImg = [System.Drawing.Image]::FromFile('C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\quran_covers_grid.jpg')
$cw = 188
$ch = 260

# Green Madinah Cover
$greenRect = New-Object System.Drawing.Rectangle(625, 12, $cw, $ch)
$bmpGreen = New-Object System.Drawing.Bitmap($cw, $ch)
$gG = [System.Drawing.Graphics]::FromImage($bmpGreen)
$gG.DrawImage($quranImg, (New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)), $greenRect, [System.Drawing.GraphicsUnit]::Pixel)
$gG.Dispose()
$bmpGreen.Save('C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\quran_cover_green.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpGreen.Dispose()

# Black & Gold Cover
$blackRect = New-Object System.Drawing.Rectangle(25, 12, $cw, $ch)
$bmpBlack = New-Object System.Drawing.Bitmap($cw, $ch)
$gB = [System.Drawing.Graphics]::FromImage($bmpBlack)
$gB.DrawImage($quranImg, (New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)), $blackRect, [System.Drawing.GraphicsUnit]::Pixel)
$gB.Dispose()
$bmpBlack.Save('C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\quran_cover_black.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpBlack.Dispose()

# Navy Blue Cover
$navyRect = New-Object System.Drawing.Rectangle(828, 12, $cw, $ch)
$bmpNavy = New-Object System.Drawing.Bitmap($cw, $ch)
$gN = [System.Drawing.Graphics]::FromImage($bmpNavy)
$gN.DrawImage($quranImg, (New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)), $navyRect, [System.Drawing.GraphicsUnit]::Pixel)
$gN.Dispose()
$bmpNavy.Save('C:\Users\User2\.gemini\antigravity\scratch\nur-islam-app\assets\quran_cover_navy.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpNavy.Dispose()

$quranImg.Dispose()
Write-Output "All 9 Hadith covers and Quran covers successfully extracted!"
