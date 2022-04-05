import dayjs from 'dayjs';
import plugin from './FinantialPlugin';
import { test, expect } from 'vitest';
dayjs.extend(plugin);

test('endOf financialYear', () => {
  const april = dayjs('2022-04-01').endOf('financialYear').toISOString();
  expect(april).toBe(dayjs('2023-03-31').endOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const may = dayjs('2022-05-01').endOf('financialYear').toISOString();
  expect(may).toBe(dayjs('2023-03-31').endOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const sep = dayjs('2023-08-01').endOf('financialYear').toISOString();
  expect(sep).toBe(dayjs('2024-03-31').endOf('day').toISOString()); // second month of second quarter   => 2022-09-30

  const dec = dayjs('2024-12-01').endOf('financialYear').toISOString();
  expect(dec).toBe(dayjs('2025-03-31').endOf('day').toISOString()); // third month of third quarter     => 2022-12-31
});

test('endOf financialQuarter', () => {
  const april = dayjs('2022-04-01').endOf('financialQuarter').toISOString();
  expect(april).toBe(dayjs('2022-06-30').endOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const may = dayjs('2022-05-01').endOf('financialQuarter').toISOString();
  expect(may).toBe(dayjs('2022-06-30').endOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const sep = dayjs('2022-08-01').endOf('financialQuarter').toISOString();
  expect(sep).toBe(dayjs('2022-09-30').endOf('day').toISOString()); // second month of second quarter   => 2022-09-30

  const dec = dayjs('2022-12-01').endOf('financialQuarter').toISOString();
  expect(dec).toBe(dayjs('2022-12-31').endOf('day').toISOString()); // third month of third quarter     => 2022-12-31
});

test('startOf financialYear', () => {
  expect(dayjs('2022-04-21').startOf('financialYear').toISOString()).toBe(
    dayjs('2022-04-01').startOf('day').toISOString(),
  ); // first month of first quarter     => 2022-06-30

  const may = dayjs('2022-05-21').startOf('financialYear').toISOString();
  expect(may).toBe(dayjs('2022-04-01').startOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const sep = dayjs('2022-08-21').startOf('financialYear').toISOString();
  expect(sep).toBe(dayjs('2022-04-01').startOf('day').toISOString()); // second month of second quarter   => 2022-09-30

  const dec = dayjs('2022-12-21').startOf('financialYear').toISOString();
  expect(dec).toBe(dayjs('2022-04-01').startOf('day').toISOString()); // third month of third quarter     => 2022-12-31
});

test('startOf financialQuarter', () => {
  const april = dayjs('2022-04-21').startOf('financialQuarter').toISOString();
  expect(april).toBe(dayjs('2022-04-01').startOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const may = dayjs('2022-05-21').startOf('financialQuarter').toISOString();
  expect(may).toBe(dayjs('2022-04-01').startOf('day').toISOString()); // first month of first quarter     => 2022-06-30

  const sep = dayjs('2022-08-21').startOf('financialQuarter').toISOString();
  expect(sep).toBe(dayjs('2022-07-01').startOf('day').toISOString()); // second month of second quarter   => 2022-09-30

  const dec = dayjs('2022-12-21').startOf('financialQuarter').toISOString();
  expect(dec).toBe(dayjs('2022-10-01').startOf('day').toISOString()); // third month of third quarter     => 2022-12-31
});

test('isSame financialYear', () => {
  expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialYear')).toBe(true);
  expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialYear')).toBe(false);
  expect(dayjs('2022-12-21').isSame('2023-04-01', 'financialYear')).toBe(false);
});

test('isSame financialQuarter', () => {
  expect(dayjs('2022-04-21').isSame('2022-06-30', 'financialQuarter')).toBe(true);
  expect(dayjs('2021-03-21').isSame('2022-06-30', 'financialQuarter')).toBe(false);
  expect(dayjs('2022-12-21').isSame('2023-10-01', 'financialQuarter')).toBe(true);
});
