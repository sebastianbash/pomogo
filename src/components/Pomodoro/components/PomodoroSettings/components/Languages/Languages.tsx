import { handleChangeLng } from "@/utils";
import { withTranslation } from "react-i18next";
import { MdTranslate } from "react-icons/md";
import { LanguagesInterface } from "../interfaces";

const Languages: React.FC<LanguagesInterface> = ({ t }) => {
  const lngLanguages: string = "pomodoro.settings.modal.body.languages";

  return (
    <div className="border-t-2">
      <div className="flex items-center">
        <h2 className="font-bold">{t(`${lngLanguages}.label`)}</h2>
        <span className="text-xl ml-4">
          <MdTranslate />
        </span>{" "}
      </div>
      <div className="space-x-4">
        <button className="text-lg" onClick={() => handleChangeLng("en")}>
          {t(`${lngLanguages}.english`)}
          {" 🇺🇸"}
        </button>
        <button className="text-lg" onClick={() => handleChangeLng("es")}>
          {t(`${lngLanguages}.spanish`)}
          {" 🇪🇸"}
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(Languages);
