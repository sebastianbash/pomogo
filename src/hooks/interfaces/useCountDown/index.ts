export interface TimerProps {
  timeLeft: number;
  started: number | null;
  lastInterval: number | null;
  timeToCount: number;
  requestId: number;
}

export interface ActionsProps {
  time: (ttc: number) => void;
  start: (ttc?: number) => void;
  pause: () => void;
  resume: () => void;
  reset: (ttc: number) => void;
}

export interface UseCountdownProps {
  (timeToCount: number, interval?: number): [number, ActionsProps];
}
