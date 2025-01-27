declare const RAFManager: {
  timer: number;
  state: "start" | "stop";
  animations: Array<{
    callback: (param: any) => void;
    fps: number;
    n: number;
    param: any;
    i: number;
  }>;
  paused: boolean;
  immediate: boolean;

  add(
    callback: (param: any) => void,
    fps?: number,
    param?: any
  ): typeof RAFManager;
  getIndex(callback: (param: any) => void): number;
  remove(callback: (param: any) => void): typeof RAFManager | undefined;
  deleteMap(callback: (param: any) => void): void;
  start(): typeof RAFManager;
  stop(): typeof RAFManager;
  pause(): typeof RAFManager;
  resume(): typeof RAFManager;
  tick(): void;
};

export default RAFManager;
