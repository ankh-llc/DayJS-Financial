# DayJS Financial Plugin
A [Day.js](https://day.js.org/) plugin to get Financial-related year and quarter from dates.
### Initialization
```js
import dayjs from 'dayjs'
import FinancialYearQuarter from 'dayjs-financial'
dayjs.extend(FinancialYearQuarter())
```


### Usage
```js
dayjs("2022-03-08").financialYear();                          // 2021
dayjs("2022-03-08").financialQuarter();                       // 4
dayjs("2022-03-08").startOf("financialYear");                 // dayjs("2021-01-01")
dayjs("2022-03-08").endOf("financialYear");                   // dayjs("2023-03-31")
dayjs("2022-03-08").endOf("financialYear");                   // dayjs("2023-03-31")
dayjs('2022-04-21').isSame('2022-06-30', 'financialYear');    // true
dayjs('2022-12-21').isSame('2023-10-01', 'financialQuarter'); // true
```


### Notes
The FinancialYearQuarter function can take an argument specifying the month at which your financial year start.
```js
dayjs.extend(FinancialYearQuarter())  // Defaults to 4 (April)
dayjs.extend(FinancialYearQuarter(1)) // January
dayjs.extend(FinancialYearQuarter(7)) // July
```

### Contributors
 ![contributers](https://contrib.rocks/image?repo=ankh-llc/DayJS-Financial)
