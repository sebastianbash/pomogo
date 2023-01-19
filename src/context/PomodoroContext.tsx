import { useCountDown } from "@/hooks";
import { useState, createContext } from "react";
import {
  Pomodoro,
  PomodoroContextProps,
  PomodoroProviderProps,
} from "./interfaces";

export const PomodoroContext = createContext<PomodoroContextProps>(
  {} as PomodoroContextProps,
);

export const PomodoroProvider = ({ children }: PomodoroProviderProps) => {
  const [pomodoro, setPomodoro] = useState<number>(1500000);
  const [executing, setExecuting] = useState<Pomodoro>({} as Pomodoro);
  const [startCounter, setStartCounter] = useState<boolean>(false);
  const [timeLeft, actions] = useCountDown(pomodoro, 1000);

  // * Set current timer
  const setCurrentTimer = (active_state: string): void => {
    updateExecute({ ...executing, active: active_state });
    setTimerTime(executing);
  };

  // * Set time
  const setTimer = (timer: number): void => {
    setStartCounter(false);
    actions.time(timer);
  };

  // * Start animate
  const startTimer = (time?: number): void => {
    setStartCounter(true);
    time ? actions.start(time) : actions.start();
  };

  // * Resume animate
  const resumeTimer = (): void => {
    setStartCounter(true);
    actions.resume();
  };

  // * Pause animate
  const pauseTimer = (): void => {
    setStartCounter(false);
    actions.pause();
  };

  // * Reset timer
  const resetTimer = (resetTo: number): void => {
    setTimerTime(executing);
    setStartCounter(false);
    actions.reset(resetTo);
  };

  // * Clear session storage
  const SettingsBtn = (): void => {
    setExecuting({} as Pomodoro);
    setPomodoro(0);
  };

  // * Update executing
  const updateExecute = (execute: Pomodoro): void => {
    setExecuting(execute);
    setTimerTime(execute);
  };

  const setTimerTime = (evaluate: Pomodoro) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        // setTimer(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        // setTimer(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        // setTimer(evaluate.long);
        break;
      default:
        setPomodoro(evaluate.work);
        // setTimer(evaluate.work);
        break;
    }
  };

  return (
    <PomodoroContext.Provider
      value={{
        timeLeft,
        pomodoro,
        executing,
        startCounter,
        setTimer,
        startTimer,
        resumeTimer,
        pauseTimer,
        resetTimer,
        updateExecute,
        SettingsBtn,
        setCurrentTimer,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
