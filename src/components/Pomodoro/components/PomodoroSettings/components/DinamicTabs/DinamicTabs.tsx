import {
  lngDescriptions,
  lngModalTabs,
  lngTabsCustomTime,
  lngTabsDefaultTime,
  lngTabsHardTime,
  lngTimes,
} from "@/components/constants";
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
      <div className="countdown__config-tabs-default space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-between">
        <button
          className={
            executing.active === "work"
              ? "countdown__config-tabs-default-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-default-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.workTime`)}</span>
            <span className="font-bold">
              {t(`${lngTabsDefaultTime}.workTime`)}
            </span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.workTime`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "short"
              ? "countdown__config-tabs-default-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-default-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.shortBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsDefaultTime}.shortBreak`)}
            </span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.shortBreak`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "long"
              ? "countdown__config-tabs-default-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-default-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.longBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsDefaultTime}.longBreak`)}
            </span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.longBreak`)}
            </span>
          </div>
        </button>
      </div>
    );
  };

  //* Hard Tab
  const hardTab = (): JSX.Element => {
    return (
      <div className="countdown__config-tabs-hard space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-between">
        <button
          className={
            executing.active === "work"
              ? "countdown__config-tabs-hard-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-hard-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.workTime`)}</span>
            <span className="font-bold">
              {t(`${lngTabsHardTime}.workTime`)}
            </span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.workTime`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "short"
              ? "countdown__config-tabs-hard-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-hard-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.shortBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsHardTime}.shortBreak`)}
            </span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.shortBreak`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "long"
              ? "countdown__config-tabs-hard-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-hard-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.longBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsHardTime}.longBreak`)}
            </span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.longBreak`)}
            </span>
          </div>
        </button>
      </div>
    );
  };

  //* Custom Tab
  const customTab = (): JSX.Element => {
    return (
      <div className="countdown__config-tabs-hard space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-between">
        <button
          className={
            executing.active === "work"
              ? "countdown__config-tabs-custom-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-custom-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={workStateRef}
          // onClick={workState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.workTime`)}</span>
            <span className="font-bold">
              {t(`${lngTabsCustomTime}.workTime`)}
            </span>
            <span>
              {executing.active === "work" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.workTime`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "short"
              ? "countdown__config-tabs-custom-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-custom-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={shortStateRef}
          // onClick={shortBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.shortBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsCustomTime}.shortBreak`)}
            </span>
            <span>
              {executing.active === "short" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white/40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.shortBreak`)}
            </span>
          </div>
        </button>
        <button
          className={
            executing.active === "long"
              ? "countdown__config-tabs-custom-button border border-black dark:border-white rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
              : "countdown__config-tabs-custom-button border border-slate-400 dark:border-white/40 rounded-md md:w-48 md:h-24 p-4 flex flex-col justify-between"
          }
          ref={longStateRef}
          // onClick={longBreakState}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{t(`${lngModalTabs}.longBreak`)}</span>
            <span className="font-bold">
              {t(`${lngTabsCustomTime}.longBreak`)}
            </span>
            <span>
              {executing.active === "long" ? (
                <FaRegDotCircle />
              ) : (
                <FaRegCircle className="text-slate-400 dark:text-white-40" />
              )}
            </span>
          </div>
          <div className="text-left">
            <span className="text-slate-500 dark:text-white/70">
              {t(`${lngDescriptions}.longBreak`)}
            </span>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="countdown__config-tabs w-full">
      <div className="countdown__config-tabs-navigation space-x-6 mt-4 md:mt-0 md:mb-4">
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
      <div className="countdown__config-tabs-content w-full mt-4 md:mt-0 mb-4">
        {renderTab()}
      </div>
    </div>
  );
};

export default withTranslation()(DinamicTabs);
