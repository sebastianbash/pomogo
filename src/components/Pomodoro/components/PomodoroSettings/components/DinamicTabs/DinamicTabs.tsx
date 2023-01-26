import { PomodoroContext } from "@/context";
import { useContext, useRef } from "react";
import { withTranslation } from "react-i18next";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { DinamicTabsInterface } from "../interfaces";

const DinamicTabs: React.FC<DinamicTabsInterface> = ({
  t,
  activeTab,
  defaultTabNav,
  hardTabNav,
  customTabNav,
}) => {
  const { executing } = useContext(PomodoroContext);

  const lngModalTabs: string = "pomodoro.settings.modal.body.states";
  const lngTabsDefaultTime: string = "pomodoro.settings.modal.defaultTab.time";
  const lngTabsHardTime: string = "pomodoro.settings.modal.hardTab.time";
  const lngTabsCustomTime: string = "pomodoro.settings.modal.customTab.time";
  const lngTimes: string = "pomodoro.settings.modal.body.times";
  const lngDescriptions: string = "pomodoro.settings.modal.body.descriptions";

  //* Refs
  const workStateRef = useRef<HTMLButtonElement>();
  const shortStateRef = useRef<HTMLButtonElement>();
  const longStateRef = useRef<HTMLButtonElement>();
  const defaultTabRef = useRef<HTMLButtonElement>();
  const hardTabRef = useRef<HTMLButtonElement>();
  const customTabRef = useRef<HTMLButtonElement>();

  //* Render the selected tab
  const renderTab = (): JSX.Element => {
    switch (activeTab) {
      case "default":
        return defaultTab();
      case "hard":
        return hardTab();
      case "custom":
        return customTab();
      default:
        return defaultTab();
    }
  };

  //* Default Tab
  const defaultTab = (): JSX.Element => {
    return (
      <div className="countdown__config-tabs-default space-x-4 flex flex-col md:flex-row">
        <button
          className="countdown__config-tabs-default-button border border-black rounded-md md:w-48 md:h-24"
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.workTime`)}</span>
            <span>{t(`${lngTabsDefaultTime}.workTime`)}</span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.workTime`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-default-button border border-black rounded-md md:w-48 md:h-24"
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.shortBreak`)}</span>
            <span>{t(`${lngTabsDefaultTime}.shortBreak`)}</span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.shortBreak`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-default-button border border-black rounded-md md:w-48 md:h-24"
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.longBreak`)}</span>
            <span>{t(`${lngTabsDefaultTime}.longBreak`)}</span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.longBreak`)}</span>
          </div>
        </button>
      </div>
    );
  };

  //* Hard Tab
  const hardTab = (): JSX.Element => {
    return (
      <div className="countdown__config-tabs-hard space-x-4 flex flex-col md:flex-row">
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.workTime`)}</span>
            <span>{t(`${lngTabsHardTime}.workTime`)}</span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.workTime`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.shortBreak`)}</span>
            <span>{t(`${lngTabsHardTime}.shortBreak`)}</span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.shortBreak`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.longBreak`)}</span>
            <span>{t(`${lngTabsHardTime}.longBreak`)}</span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.longBreak`)}</span>
          </div>
        </button>
      </div>
    );
  };

  //* Custom Tab
  const customTab = (): JSX.Element => {
    return (
      <div className="countdown__config-tabs-hard space-x-4 flex flex-col md:flex-row">
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.workTime`)}</span>
            <span>{t(`${lngTabsCustomTime}.workTime`)}</span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.workTime`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.shortBreak`)}</span>
            <span>{t(`${lngTabsCustomTime}.shortBreak`)}</span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.shortBreak`)}</span>
          </div>
        </button>
        <button
          className="countdown__config-tabs-hard-button border border-black rounded-md md:w-48 md:h-24"
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span>{t(`${lngModalTabs}.longBreak`)}</span>
            <span>{t(`${lngTabsCustomTime}.longBreak`)}</span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle />
              )}
            </span>
          </div>
          <div className="text-left">
            <span>{t(`${lngDescriptions}.longBreak`)}</span>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="countdown__config-tabs">
      <div className="countdown__config-tabs-navigation space-x-4">
        <button
          className={
            activeTab === "default"
              ? "countdown__config-tabs-navigation-button active border-b-4 border-black dark:border-white pb-2"
              : "countdown__config-tabs-navigation-button opacity-40"
          }
          ref={defaultTabRef}
          onClick={defaultTabNav}
        >
          {t(`${lngTimes}.default`)}
        </button>
        <button
          className={
            activeTab === "hard"
              ? "countdown__config-tabs-navigation-button active border-b-4 border-black dark:border-white pb-2"
              : "countdown__config-tabs-navigation-button opacity-40"
          }
          ref={hardTabRef}
          onClick={hardTabNav}
        >
          {t(`${lngTimes}.hard`)}
        </button>
        <button
          className={
            activeTab === "custom"
              ? "countdown__config-tabs-navigation-button active border-b-4 border-black dark:border-white pb-2"
              : "countdown__config-tabs-navigation-button opacity-40"
          }
          ref={customTabRef}
          onClick={customTabNav}
        >
          {t(`${lngTimes}.custom`)}
        </button>
      </div>
      <div className="countdown__config-tabs-content">{renderTab()}</div>
    </div>
  );
};

export default withTranslation()(DinamicTabs);
