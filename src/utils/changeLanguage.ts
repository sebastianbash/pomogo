import i18next from "i18next";

export const handleChangeLng = (language: string): void => {
  i18next.changeLanguage(language);
};
