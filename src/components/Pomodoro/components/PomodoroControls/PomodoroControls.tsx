import { MdPause, MdPlayArrow, MdStop, MdSettings } from "react-icons/md";
import { PomodoroControlsInterface } from "../interfaces";

const PomodoroControls: React.FC<PomodoroControlsInterface> = ({
  isPomodoroActive,
  isInitialPomodoro,
  handlerPause,
  handlerStart,
  handlerResume,
  handlerRestart,
  handlerConfig,
}) => {
  return (
    <div className="countdown__controls flex justify-center items-center space-x-4">
      {isPomodoroActive ? (
        <button
          className="transition-all text-5xl lg:text-8xl opacity-10 hover:opacity-100 scale-100 active:scale-90"
          onClick={handlerPause}
          // disabled={isPaused() || isCompleted()}
        >
          <MdPause />
        </button>
      ) : (
        <button
          className="transition-all text-5xl lg:text-8xl opacity-100 scale-95 active:scale-90"
          onClick={isInitialPomodoro ? handlerStart : handlerResume}
          // disabled={!isPaused() || isCompleted()}
        >
          <MdPlayArrow />
        </button>
      )}
      <button
        className={
          isPomodoroActive
            ? "transition-all text-5xl lg:text-8xl opacity-10 scale-110 hover:opacity-100 active:scale-100"
            : "transition-all text-5xl lg:text-8xl opacity-10 scale-110 hover:opacity-100 active:scale-100"
        }
        onClick={handlerRestart}
        // disabled={!isPomodoroActive}
      >
        <MdStop />
      </button>
      <button
        className="transition-all text-4xl lg:text-6xl opacity-10 scale-110 hover:opacity-100 active:scale-100"
        onClick={handlerConfig}
      >
        <MdSettings />
      </button>
    </div>
  );
};

export default PomodoroControls;
