export interface PomodoroContextProps {
  timeLeft: number;
  pomodoro: number;
  executing: Pomodoro;
  isAutomatic: boolean;
  startCounter: boolean;
  pomodoroType: string;
  setCurrentTimer: (active_state: string) => void;
  updateExecute: (execute: Pomodoro) => void;
  startTimerBol: () => void;
  setTypePomodoro: (type: "default" | "hard" | "custom") => void;
  setTimer: (timer: number) => void;
  startTimer: (time?: number) => void;
  resumeTimer: () => void;
  pauseTimer: () => void;
  resetTimer: (resetTo?: number) => void;
  SettingsBtn: () => void;
  changeToAutomatic: () => void;
  onCompleteTimer: (newTimer: number) => void;
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
