import { contextBridge, ipcRenderer } from 'electron';

export interface IElectronAPI {
  restartApp: () => void;
  minimize: () => void;
  maximize: () => void;
  close: () => void;
  getVersion: () => Promise<string>;
  isElectron: boolean;
}

const electronAPI: IElectronAPI = {
  restartApp: () => ipcRenderer.send('app:restart'),
  minimize: () => ipcRenderer.send('app:minimize'),
  maximize: () => ipcRenderer.send('app:maximize'),
  close: () => ipcRenderer.send('app:close'),
  getVersion: () => ipcRenderer.invoke('app:get-version'),
  isElectron: true,
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);
