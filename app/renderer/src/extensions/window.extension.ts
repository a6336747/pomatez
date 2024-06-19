import Electron from "electron";

declare global {
  interface Window {
    electron: {
      setProgressBar: (
        time: number,
        type: "none" | "normal" | "indeterminate" | "error" | "paused"
      ) => void;
      send: (channel: string, ...args: any[]) => void;
      recieve: (channel: string, response: Function) => void;
      openExternal: (
        url: string,
        options?: Electron.OpenExternalOptions
      ) => Promise<void>;
    };
    __TAURI__: {};
  }
}

export {};
