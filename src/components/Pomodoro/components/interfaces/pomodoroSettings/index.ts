import { TFunction } from "i18next";

export interface PomodoroSettingsInterface {
  t: TFunction;
  handlerCloseConfig: () => void;
}
