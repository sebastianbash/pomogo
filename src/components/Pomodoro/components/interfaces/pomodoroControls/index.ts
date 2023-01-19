export interface PomodoroControlsInterface {
  isPomodoroActive: boolean;
  isInitialPomodoro: boolean;
  handlerPause: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlerStart: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlerResume: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlerRestart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
