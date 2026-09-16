const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1366,
    height: 860,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../dist-electron/preload.js'),
      webSecurity: false
    }
  });

  await win.loadFile(path.join(__dirname, '../dist/index.html'));
  
  // Wait 2 seconds for React to mount and images to render
  setTimeout(async () => {
    const image = await win.capturePage();
    const dest = path.join('C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\216c940a-6766-4efc-8e70-b8cb58294cab', 'electron_render_test.png');
    fs.writeFileSync(dest, image.toPNG());
    console.log('Successfully captured page to:', dest);
    app.quit();
  }, 2500);
});
