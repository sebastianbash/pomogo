export interface PomodoroTimerInterface {
  pomodoro: number;
  settingsRef: React.MutableRefObject<HTMLSpanElement>;
  handlerMenu: () => void;
}
