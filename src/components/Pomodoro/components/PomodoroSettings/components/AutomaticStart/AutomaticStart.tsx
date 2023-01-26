import React from "react";
import { withTranslation } from "react-i18next";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AutomaticStartInterface } from "../interfaces";

const AutomaticStart: React.FC<AutomaticStartInterface> = ({
  t,
  automaticStart,
  setAutomaticStart,
}) => {
  const automaticLng: string = "pomodoro.settings.modal.body.autoStart";
  return (
    <div>
      <div className="flex items-center">
        <h2>{t(`${automaticLng}.label`)}</h2>
        <button className="text-3xl ml-auto" onClick={setAutomaticStart}>
          {automaticStart ? <BsToggleOn /> : <BsToggleOff />}
        </button>
      </div>
      <p>{t(`${automaticLng}.description`)}</p>
    </div>
  );
};

export default withTranslation()(AutomaticStart);
