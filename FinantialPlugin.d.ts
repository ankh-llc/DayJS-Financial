import { PluginFunc, ConfigType, QUnitType } from 'dayjs';

export type FUnitType = QUnitType | 'financialYear' | 'financialQuarter';

declare const plugin: PluginFunc;
export = plugin;

declare module 'dayjs' {
  interface Dayjs {
    financialQuarter(): number;

    financialYear(): number;

    startOf(unit: FUnitType): Dayjs;

    endOf(unit: FUnitType): Dayjs;

    isSame(date: string | Dayjs, unit: FUnitType): boolean;
  }
}
