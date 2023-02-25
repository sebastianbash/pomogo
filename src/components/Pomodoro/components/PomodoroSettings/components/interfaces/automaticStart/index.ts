import { TFunction } from "i18next";

export interface AutomaticStartInterface {
  t: TFunction;
  automaticStart: boolean;
  setAutomaticStart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
