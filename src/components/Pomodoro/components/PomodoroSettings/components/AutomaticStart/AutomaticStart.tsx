import { automaticLng } from "@/components/constants";
import React from "react";
import { withTranslation } from "react-i18next";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AutomaticStartInterface } from "../interfaces";

const AutomaticStart: React.FC<AutomaticStartInterface> = ({
  t,
  automaticStart,
  setAutomaticStart,
}) => {
  return (
    <div className="">
      <div className="flex items-center">
        <h2 className="font-bold">{t(`${automaticLng}.label`)}</h2>
        <button className="text-3xl ml-auto" onClick={setAutomaticStart}>
          {automaticStart ? <BsToggleOn /> : <BsToggleOff />}
        </button>
      </div>
      <p>{t(`${automaticLng}.description`)}</p>
    </div>
  );
};

export default withTranslation()(AutomaticStart);
