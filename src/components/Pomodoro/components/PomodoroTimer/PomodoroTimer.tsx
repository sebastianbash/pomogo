import { MouseEventHandler } from "react";
import { PomodoroTimerInterface } from "../interfaces";

const PomodoroTimer: React.FC<PomodoroTimerInterface> = ({
  pomodoro,
  settingsRef,
  handlerMenu,
}) => {
  const timeRemaining = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;

    return hoursString + ":" + minutesString + ":" + secondsString;
  };

  // ! NOT WORKS
  const followButton = (e: any): void => {
    const x = e.clientX;
    const y = e.clientY;
    console.log("x: ", x, " y: ", y);
    // settingsRef.current.style.left = x + "px";
    // settingsRef.current.style.top = y + "px";
  };

  return (
    <div
      className="countdown__container gl__countdown relative max-w-[900px] w-full max-h-80 h-44 md:h-80 flex justify-center items-center cursor-pointer"
      onClick={() => handlerMenu}
      onMouseEnter={() => (settingsRef.current.style.display = "block")}
      onMouseLeave={() => (settingsRef.current.style.display = "none")}
    >
      <span
        ref={settingsRef}
        onMouseEnter={followButton}
        className="countdown__settings-hover absolute hidden z-10 py-10 px-8 bg-[var(--black-color)] dark:bg-[var(--white-color)] rounded-full text-[var(--white-color)] dark:text-[var(--black-color)]"
      >
        Settings
      </span>
      {/* {isMenuOpen && handleMenu()} */}
      <span className="w-full h-full flex justify-center items-center text-[8rem] md:text-[14rem] xl:text-[16rem] 2xl:text-[18rem] tracking-wide">
        {timeRemaining(pomodoro)}
      </span>
    </div>
  );
};

export default PomodoroTimer;
