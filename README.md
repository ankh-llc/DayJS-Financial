# DayJS Financial Plugin

### Usage

```
dayjs("2022-03-08").financialYear(); // 2021
dayjs("2022-03-08").financialQuarter(); // 4
dayjs("2022-03-08").startOf("financialYear");                 // dayjs("2021-01-01")
dayjs("2022-03-08").endOf("financialYear");                   // dayjs("2023-03-31")
dayjs("2022-03-08").endOf("financialYear");                   // dayjs("2023-03-31")
dayjs('2022-04-21').isSame('2022-06-30', 'financialYear');    //true
dayjs('2022-12-21').isSame('2023-10-01', 'financialQuarter'); //true;
```