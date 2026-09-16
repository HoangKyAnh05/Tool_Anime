const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const output = execSync(
    'powershell -NoProfile -Command "& { $w = New-Object -ComObject WScript.Shell; $s = $w.CreateShortcut(\'D:\\Desktop\\IELTS Anime Light Novel.lnk\'); [PSCustomObject]@{ Target = $s.TargetPath; Arguments = $s.Arguments; WorkingDir = $s.WorkingDirectory; Icon = $s.IconLocation } | Format-List }"',
    { encoding: 'utf8' }
  );
  console.log(output);
} catch (err) {
  console.error(err);
}
