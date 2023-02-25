import { TFunction } from "i18next";

export interface TabStatesInterface {
  t: TFunction;
  work: React.MutableRefObject<HTMLButtonElement>;
  short: React.MutableRefObject<HTMLButtonElement>;
  long: React.MutableRefObject<HTMLButtonElement>;
  workState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shortState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  longState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
