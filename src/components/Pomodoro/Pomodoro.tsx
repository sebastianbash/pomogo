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
    setTimer,
    startTimer,
    resumeTimer,
    pauseTimer,
    resetTimer,
    updateExecute,
    setCurrentTimer,
  } = useContext(PomodoroContext);

  const [newTimer, setNewTimer] = useState<PomodoroState>({
    work: minsToMillisecons(25),
    short: minsToMillisecons(5),
    long: minsToMillisecons(15),
    active: "work",
  }); //* Initial pomodoro state (default)
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true); // * On load the app.
  const [isConfigOpen, setIsConfigOpen] = useState(false); // * Config open state

  const workStateRef = useRef<HTMLButtonElement>();
  const shortStateRef = useRef<HTMLButtonElement>();
  const longStateRef = useRef<HTMLButtonElement>();

  //* start the timer during the first render
  useEffect(() => {
    updateExecute(newTimer); // * Set default pomodoro state to PomodoroProvider hooks.
    // console.log("pomodoro:", pomodoro, " timeLeft: ", timeLeft);
  }, [pomodoro, timeLeft]);

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
