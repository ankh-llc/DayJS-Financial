import { PluginFunc, ConfigType, QUnitType } from "dayjs";

declare const plugin: (financialStartMonth?: number) => PluginFunc;
export = plugin;

type FUnitType = QUnitType | "financialYear" | "financialQuarter";
declare module "dayjs" {
  interface Dayjs {
    financialQuarter(): number;

    financialYear(): number;

    financialMonth(): number;

    startOf(unit: FUnitType): Dayjs;

    endOf(unit: FUnitType): Dayjs;

    isSame(date: string | Dayjs, unit: FUnitType): boolean;
  }
}
