import { lngThemeToggle } from "@/components/constants";
import { withTranslation } from "react-i18next";
import { ThemeInterface } from "../interfaces";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "@/context";

const Theme: React.FC<ThemeInterface> = ({ t }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <div className="flex items-center">
      <div className="">
        <h2 className="font-bold">{t(`${lngThemeToggle}.label`)}</h2>
        <span className="">{t(`${lngThemeToggle}.description`)}</span>
      </div>
      <div className="ml-auto">
        <button className="" onClick={handleTheme}>
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(Theme);
