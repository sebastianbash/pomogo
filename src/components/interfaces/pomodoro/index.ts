import { TFunction } from "i18next";

export interface PomodoroInterface {
  t: TFunction;
}
export interface PomodoroState {
  work: number;
  short: number;
  long: number;
  active: string;
}
