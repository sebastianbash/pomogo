import { PomodoroContext } from "@/context";
import { useContext, useEffect } from "react";
import { TabStatesInterface } from "../interfaces";

const TabStates: React.FC<TabStatesInterface> = ({
  work,
  short,
  long,
  workState,
  shortState,
  longState,
}) => {
  const { executing } = useContext(PomodoroContext);

  useEffect(() => {
    handleStates();
  }, [executing]);

  // * Handle the states styles (tabs ui)
  const handleStates = (): string => {
    switch (executing.active) {
      case "work":
        short.current.style.border = "none";
        short.current.style.opacity = "0.1";
        long.current.style.border = "none";
        long.current.style.opacity = "0.1";
        work.current.style.opacity = "1";
        return (work.current.style.borderBottom = "8px solid");
      case "short":
        work.current.style.border = "none";
        work.current.style.opacity = "0.1";
        long.current.style.border = "none";
        long.current.style.opacity = "0.1";
        short.current.style.opacity = "1";
        return (short.current.style.borderBottom = "8px solid");
      case "long":
        work.current.style.border = "none";
        work.current.style.opacity = "0.1";
        short.current.style.border = "none";
        short.current.style.opacity = "0.1";
        long.current.style.opacity = "1";
        return (long.current.style.borderBottom = "8px solid");

      default:
        short.current.style.opacity = "0.1";
        long.current.style.opacity = "0.1";
        return (work.current.style.borderBottom = "8px solid #fff");
    }
  };

  return (
    <div className="countdown__states w-full lg:w-[900px] mb-5">
      <div className="countdown__state-tabs w-full">
        <div className="tabs w-full flex justify-between items-center">
          <button ref={work} className="tab flex-1" onClick={workState}>
            <span className="md:text-2xl">Work</span>
          </button>
          <button ref={short} className="tab flex-1" onClick={shortState}>
            <span className="md:text-2xl">Short</span>
          </button>
          <button ref={long} className="tab flex-1" onClick={longState}>
            <span className="md:text-2xl">Long</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabStates;
