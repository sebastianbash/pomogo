import { lngLanguages } from "@/components/constants";
import { handleChangeLng } from "@/utils";
import { withTranslation } from "react-i18next";
import { MdTranslate } from "react-icons/md";
import { LanguagesInterface } from "../interfaces";

const Languages: React.FC<LanguagesInterface> = ({ t }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <h2 className="font-bold">{t(`${lngLanguages}.label`)}</h2>
        <span className="text-xl ml-auto">
          <MdTranslate />
        </span>{" "}
      </div>
      <div className="space-x-4">
        <button className="text-lg" onClick={() => handleChangeLng("en")}>
          {t(`${lngLanguages}.english`)}
          {" πΊπΈ"}
        </button>
        <button className="text-lg" onClick={() => handleChangeLng("es")}>
          {t(`${lngLanguages}.spanish`)}
          {" πͺπΈ"}
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(Languages);
