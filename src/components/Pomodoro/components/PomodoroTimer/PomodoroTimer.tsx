import { PomodoroTimerInterface } from "../interfaces";

const PomodoroTimer: React.FC<PomodoroTimerInterface> = ({ pomodoro }) => {
  // * Time format
  const timeRemaining = (milliseconds: number): string => {
    const minHour: number = 60 * 60000;
    const seconds: number = Math.floor((milliseconds / 1000) % 60);
    const minutes: number = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours: number = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;

    return milliseconds > minHour
      ? hoursString + ":" + minutesString + ":" + secondsString
      : minutesString + ":" + secondsString;
  };

  return (
    <div className="countdown__container gl__countdown relative max-w-[900px] w-full max-h-80 h-44 md:h-80 flex justify-center items-center cursor-pointer">
      <div className="w-full h-full flex justify-center items-center text-[8rem] md:text-[14rem] xl:text-[16rem] 2xl:text-[18rem] tracking-wide">
        <span className="countdown__timer w-fit h-full flex justify-center items-center">
          {timeRemaining(pomodoro)}
        </span>
      </div>
    </div>
  );
};

export default PomodoroTimer;
