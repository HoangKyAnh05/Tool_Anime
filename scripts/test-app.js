const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../dist-electron/preload.js')
    }
  });

  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log('[RENDERER CONSOLE]:', message, 'at', sourceId, ':', line);
  });

  win.webContents.on('did-fail-load', (e, code, desc) => {
    console.error('[LOAD FAIL]:', code, desc);
    app.exit(1);
  });

  win.webContents.on('did-finish-load', () => {
    console.log('[LOAD SUCCESS]: Page finished loading completely!');
    app.quit();
  });

  win.loadFile(path.join(__dirname, '../dist/index.html'));
});
