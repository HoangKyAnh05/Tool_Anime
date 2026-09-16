import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'path';

// Disable shader disk cache to avoid Windows access denied cache lock issues
app.commandLine.appendSwitch('disable-gpu-shader-disk-cache');

let mainWindow: BrowserWindow | null = null;

// Single instance lock to avoid duplicate processes and bring existing window to front
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
  });

  function createWindow() {
    const iconPath = path.join(__dirname, '../assets/icon.png');

    mainWindow = new BrowserWindow({
      width: 1366,
      height: 860,
      minWidth: 1024,
      minHeight: 700,
      center: true,
      show: true, // Show immediately
      icon: iconPath,
      backgroundColor: '#0a0b10',
      title: 'IELTS Anime Light Novel - Chinh Phục 8.0+',
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
        webSecurity: false, // Allow local file loading smoothly
      },
    });

    mainWindow.setMenuBarVisibility(false);

    // External links open in browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
      shell.openExternal(url);
      return { action: 'deny' };
    });

    // Load built dist/index.html
    const distPath = path.join(__dirname, '../dist/index.html');
    mainWindow.loadFile(distPath).catch((err) => {
      console.error('Failed to load dist/index.html:', err);
    });

    mainWindow.once('ready-to-show', () => {
      mainWindow?.show();
      mainWindow?.focus();
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }

  // IPC Handlers
  ipcMain.on('app:restart', () => {
    app.relaunch();
    app.exit(0);
  });

  ipcMain.on('app:minimize', () => {
    mainWindow?.minimize();
  });

  ipcMain.on('app:maximize', () => {
    if (mainWindow?.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow?.maximize();
    }
  });

  ipcMain.on('app:close', () => {
    mainWindow?.close();
  });

  ipcMain.handle('app:get-version', () => {
    return app.getVersion();
  });

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
