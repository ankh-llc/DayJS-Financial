import dayjs from 'dayjs';
import plugin from './src/FinancialPlugin';
import { describe, test, expect, beforeAll } from 'vitest';

describe('financial plugin @ april', () => {
  beforeAll(() => {
    dayjs.extend(plugin(4));
  });

  test.concurrent('financialYear', () => {
    expect(dayjs('2022-04-01').financialYear()).toBe(2022);
    expect(dayjs('2022-03-31').financialYear()).toBe(2021);
    expect(dayjs('2022-02-10').financialYear()).toBe(2021);
  });

  test.concurrent('financialQuarter', () => {
    expect(dayjs('2022-04-01').financialQuarter()).toBe(1);
    expect(dayjs('2023-05-01').financialQuarter()).toBe(1);
    expect(dayjs('2024-08-01').financialQuarter()).toBe(2);
    expect(dayjs('2025-12-01').financialQuarter()).toBe(3);
  });

  test.concurrent('endOf financialYear', () => {
    let actual, expected;
    actual = dayjs('2022-04-01').endOf('financialYear').toISOString();
    expected = dayjs('2023-03-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-01').endOf('financialYear').toISOString();
    expected = dayjs('2023-03-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2023-08-01').endOf('financialYear').toISOString();
    expected = dayjs('2024-03-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2024-12-01').endOf('financialYear').toISOString();
    expected = dayjs('2025-03-31').endOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('endOf financialQuarter', () => {
    let actual, expected;
    actual = dayjs('2022-04-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-06-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-06-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-09-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('startOf financialYear', () => {
    let actual, expected;

    actual = dayjs('2022-02-21').startOf('financialYear').toISOString();
    expected = dayjs('2021-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-04-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('startOf financialQuarter', () => {
    let actual, expected;
    actual = dayjs('2022-04-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-07-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-10-01').startOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('isSame financialYear', () => {
    expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialYear')).toBe(true);
    expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialYear')).toBe(false);
    expect(dayjs('2022-12-21').isSame('2023-04-01', 'financialYear')).toBe(false);
  });

  test.concurrent('isSame financialQuarter', () => {
    expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialQuarter')).toBe(true);
    expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialQuarter')).toBe(false);
    expect(dayjs('2022-12-21').isSame('2023-10-01', 'financialQuarter')).toBe(true);
  });
});

/**
 * January Based
 */
describe('financial plugin @ january', () => {
  beforeAll(() => {
    dayjs.extend(plugin(1));
  });

  test.concurrent('financialYear', () => {
    expect(dayjs('2022-04-01').financialYear()).toBe(2022);
    expect(dayjs('2022-03-31').financialYear()).toBe(2022);
  });

  test.concurrent('financialQuarter', () => {
    expect(dayjs('2022-04-01').financialQuarter()).toBe(2);
    expect(dayjs('2023-05-01').financialQuarter()).toBe(2);
    expect(dayjs('2024-08-01').financialQuarter()).toBe(3);
    expect(dayjs('2025-12-01').financialQuarter()).toBe(4);
  });

  test.concurrent('endOf financialYear', () => {
    let actual, expected;
    actual = dayjs('2022-04-01').endOf('financialYear').toISOString();
    expected = dayjs('2022-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-01').endOf('financialYear').toISOString();
    expected = dayjs('2022-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2023-08-01').endOf('financialYear').toISOString();
    expected = dayjs('2023-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2024-12-01').endOf('financialYear').toISOString();
    expected = dayjs('2024-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('endOf financialQuarter', () => {
    let actual, expected;
    actual = dayjs('2022-04-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-06-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-06-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-09-30').endOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-01').endOf('financialQuarter').toISOString();
    expected = dayjs('2022-12-31').endOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('startOf financialYear', () => {
    let actual, expected;
    actual = dayjs('2022-04-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-01-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-01-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-01-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-21').startOf('financialYear').toISOString();
    expected = dayjs('2022-01-01').startOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('startOf financialQuarter', () => {
    let actual, expected;
    actual = dayjs('2022-04-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-05-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-04-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-08-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-07-01').startOf('day').toISOString();
    expect(actual).toBe(expected);

    actual = dayjs('2022-12-21').startOf('financialQuarter').toISOString();
    expected = dayjs('2022-10-01').startOf('day').toISOString();
    expect(actual).toBe(expected);
  });

  test.concurrent('isSame financialYear', () => {
    expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialYear')).toBe(true);
    expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialYear')).toBe(false);
    expect(dayjs('2022-12-21').isSame('2023-04-01', 'financialYear')).toBe(false);
  });

  test.concurrent('isSame financialQuarter', () => {
    expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialQuarter')).toBe(true);
    expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialQuarter')).toBe(false);
    expect(dayjs('2022-12-21').isSame('2023-10-01', 'financialQuarter')).toBe(true);
  });
});
