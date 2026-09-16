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
  
  // Wait 1.5s then click Writing tab
  setTimeout(async () => {
    await win.webContents.executeJavaScript(`
      const buttons = Array.from(document.querySelectorAll('button'));
      const writingBtn = buttons.find(b => b.innerText.includes('Writing'));
      if (writingBtn) writingBtn.click();
    `);

    setTimeout(async () => {
      const image = await win.capturePage();
      const dest = path.join('C:', 'Users', 'Admin', '.gemini', 'antigravity-ide', 'brain', '216c940a-6766-4efc-8e70-b8cb58294cab', 'electron_writing_sasuke.png');
      fs.writeFileSync(dest, image.toPNG());
      console.log('Successfully captured writing tab to:', dest);
      app.quit();
    }, 1500);
  }, 1500);
});
