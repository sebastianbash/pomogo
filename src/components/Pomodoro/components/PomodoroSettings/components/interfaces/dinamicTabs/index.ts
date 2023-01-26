import { TFunction } from "i18next";

export interface DinamicTabsInterface {
  t: TFunction;
  activeTab: string;
  defaultTabNav: () => void;
  hardTabNav: () => void;
  customTabNav: () => void;
}
