import { useContext, useEffect, useRef, useState } from "react";
import { PomodoroContext } from "@/context/PomodoroContext";
import { withTranslation } from "react-i18next";
import { PomodoroInterface, PomodoroState } from "../interfaces";
import { minsToMillisecons } from "@/utils";
import {
  PomodoroControls,
  PomodoroSettings,
  PomodoroTimer,
  TabStates,
} from "./components";

const Pomodoro: React.FC<PomodoroInterface> = () => {
  const {
    timeLeft,
    pomodoro,
    startCounter,
    executing,
    isAutomatic,
    pomodoroType,
    setTimer,
    startTimer,
    startTimerBol,
    resumeTimer,
    pauseTimer,
    resetTimer,
    updateExecute,
    setCurrentTimer,
    onCompleteTimer,
  } = useContext(PomodoroContext);

  const [newTimer, setNewTimer] = useState<PomodoroState>({
    work: minsToMillisecons(25),
    short: minsToMillisecons(5),
    long: minsToMillisecons(15),
    active: "work",
  }); //* Initial pomodoro state (default)
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true); // * On load the app.
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false); // * Config open state
  const [pomodoroLoop, setPomodoroLoop] = useState<number>(0); // * Loops of pomodoro (2 max and set long rest)

  const workStateRef = useRef<HTMLButtonElement>();
  const shortStateRef = useRef<HTMLButtonElement>();
  const longStateRef = useRef<HTMLButtonElement>();

  //* start the timer during the first render
  useEffect(() => {
    updateExecute(newTimer); // * Set default pomodoro state to PomodoroProvider hooks.
    evaluatePomodoroType();
    evaluateCompleteTimer();
  }, [pomodoro, timeLeft, isAutomatic, pomodoroLoop, pomodoroType]);

  //* Handle the timer (controls)
  // const handleRestart = useCallback((): void => {
  //   // you can start existing timer with an arbitrary value
  //   // if new value is not passed timer will start with initial value
  //   const newTime = minutesToMilliseconds(26);
  //   actions.start(newTime);
  // }, []);

  const handlePause = (): void => pauseTimer();

  const handleResume = (): void => resumeTimer();

  const handleStart = (): void => {
    startTimer(pomodoro);
    setIsFirstTime(false);
    // if (isFirstTime) {
    //   startTimer();
    //   actions.start();
    //   setIsFirstTime(false);
    // }

    // if (executing) {
    //   handlePause();
    // }
  };

  const handleRestart = (): void => {
    resetTimer(pomodoro);
    setIsFirstTime(true);
  };

  //* evaluate when the type of pomodoro change
  const evaluatePomodoroType = (): void => {
    switch (pomodoroType) {
      case "hard":
        setNewTimer({
          ...newTimer,
          work: minsToMillisecons(50),
          short: minsToMillisecons(10),
          long: minsToMillisecons(30),
        });
        break;
      case "custom":
        setNewTimer({
          ...newTimer,
          work: minsToMillisecons(1),
          short: minsToMillisecons(1),
          long: minsToMillisecons(1),
        });
        break;
      default:
        setNewTimer(newTimer);
    }
  };

  //* evaluates when the timer is completed.
  const evaluateCompleteTimer = (): void => {
    const currentTimer: string = executing.active;
    if (!isAutomatic && timeLeft === 0) {
      switch (currentTimer) {
        case "work":
          setShortState();
          break;
        case "short":
          setWorkState();
          break;
        case "long":
          setLongState();
          break;
        default:
          setWorkState();
      }
    }
    if (isAutomatic && timeLeft === 0 && pomodoroLoop <= 1) {
      switch (currentTimer) {
        case "work":
          setShortState();
          onCompleteTimer(newTimer.short);
          setPomodoroLoop(pomodoroLoop + 1);
          startTimerBol();
          break;
        case "short":
          setWorkState();
          onCompleteTimer(newTimer.work);
          setPomodoroLoop(pomodoroLoop + 1);
          startTimerBol();
          break;
        default:
          setWorkState();
          onCompleteTimer(newTimer.work);
          setPomodoroLoop(0);
          startTimerBol();
      }
    } else if (isAutomatic && timeLeft === 0 && pomodoroLoop === 2) {
      setLongState();
      onCompleteTimer(newTimer.long);
      startTimerBol();
      setPomodoroLoop(0);
      return;
    }
  };

  //* Set the current timer state (tabs)
  const setWorkState = (): void => {
    setCurrentTimer("work");
    setNewTimer({ ...newTimer, active: "work" });
    setTimer(newTimer.work);
  };

  const setShortState = (): void => {
    setCurrentTimer("short");
    setNewTimer({ ...newTimer, active: "short" });
    setTimer(newTimer.short);
  };

  const setLongState = (): void => {
    setCurrentTimer("long");
    setNewTimer({ ...newTimer, active: "long" });
    setTimer(newTimer.long);
  };

  const handleConfig = (): void => setIsConfigOpen(!isConfigOpen);

  return (
    <div className="">
      <TabStates
        work={workStateRef}
        short={shortStateRef}
        long={longStateRef}
        workState={setWorkState}
        shortState={setShortState}
        longState={setLongState}
      />
      <PomodoroTimer pomodoro={timeLeft} />
      <PomodoroControls
        isPomodoroActive={startCounter}
        isInitialPomodoro={isFirstTime}
        handlerPause={handlePause}
        handlerResume={handleResume}
        handlerStart={handleStart}
        handlerRestart={handleRestart}
        handlerConfig={handleConfig}
      />
      {isConfigOpen && (
        <PomodoroSettings handlerCloseConfig={() => setIsConfigOpen(false)} />
      )}
    </div>
  );
};

export default withTranslation()(Pomodoro);
