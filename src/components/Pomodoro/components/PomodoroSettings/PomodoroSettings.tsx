import { useState } from "react";
import { withTranslation } from "react-i18next";
import { MdOutlineSettings, MdClose } from "react-icons/md";
import { PomodoroSettingsInterface } from "../interfaces";
import { AutomaticStart, DinamicTabs } from "./components";

const PomodoroSettings: React.FC<PomodoroSettingsInterface> = ({
  t,
  handlerCloseConfig,
}) => {
  const [tabConfiguration, setTabConfiguration] = useState<
    "default" | "hard" | "custom"
  >("default");
  const [isAutoStart, setIsAutoStart] = useState(false); // * Auto Start next timer

  const lngModal: string = "pomodoro.settings.modal";

  return (
    <div className="countdown__config-modal absolute bg-[var(--light-modal-bg-color)] dark:bg-[var(--dark-modal-bg-color)] w-full h-full rounded-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="countdown__config-container h-full py-4 px-8 flex flex-col flex-wrap">
        <div className="countdown__config-header border-b-2 pb-2">
          <h2 className="text-xl flex items-center">
            <span className="mr-4">
              <MdOutlineSettings />
            </span>
            <span>{t(`${lngModal}.header`)}</span>
            <button
              className="ml-auto cursor-pointer"
              onClick={handlerCloseConfig}
            >
              <MdClose />
            </button>
          </h2>
        </div>
        <div className="countdown__config-body border-b-2 pb-2">
          <DinamicTabs
            activeTab={tabConfiguration}
            defaultTabNav={() => setTabConfiguration("default")}
            hardTabNav={() => setTabConfiguration("hard")}
            customTabNav={() => setTabConfiguration("custom")}
          />
          <AutomaticStart
            automaticStart={isAutoStart}
            setAutomaticStart={() => setIsAutoStart(!isAutoStart)}
          />
        </div>
        <div className="countdown__config-footer flex justify-center items-center space-x-6">
          <button
            className="py-2 px-4 border rounded-lg hover:border-gray-500 transition-all active:scale-95"
            onClick={handlerCloseConfig}
          >
            {t(`${lngModal}.footer.cancel`)}
          </button>
          <button className="py-2 px-4 border rounded-lg text-white dark:text-black bg-[var(--blue-color)] dark:bg-[var(--grey-color)] hover:opacity-90 transition-all active:scale-95">
            {t(`${lngModal}.footer.save`)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(PomodoroSettings);
