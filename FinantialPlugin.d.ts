import { PluginFunc, ConfigType, QUnitType } from "dayjs";

export type FUnitType = QUnitType | "financialYear";

declare const plugin: PluginFunc;
export = plugin;

declare module "dayjs" {
  interface Dayjs {
    financialQuarter(): number;

    financialYear(): number;

    startOf(unit: FUnitType): Dayjs;
  }
}
