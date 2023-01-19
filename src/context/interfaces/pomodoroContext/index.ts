export interface PomodoroContextProps {
  timeLeft: number;
  pomodoro: number;
  executing: Pomodoro;
  startCounter: boolean;
  setCurrentTimer: (active_state: string) => void;
  updateExecute: (execute: Pomodoro) => void;
  setTimer: (timer: number) => void;
  startTimer: (time?: number) => void;
  resumeTimer: () => void;
  pauseTimer: () => void;
  resetTimer: (resetTo?: number) => void;
  SettingsBtn: () => void;
}

export interface PomodoroProviderProps {
  children: React.ReactNode;
}

export interface Pomodoro {
  work: number;
  short: number;
  long: number;
  active: string;
}
