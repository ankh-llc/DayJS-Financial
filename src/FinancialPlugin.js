export default (financialStartMonth=4) => {
  const zeroBasedMonth = financialStartMonth - 1;

  return (option, dayjsClass, dayjsFactory) => {
    dayjsClass.prototype.financialQuarter = function () {
      const quarter = Math.floor((this.month() / 3) - (zeroBasedMonth / 3)) + 1;
      return quarter > 0 ? quarter : 4;
    };

    dayjsClass.prototype.financialYear = function () {
      const quarter = this.financialQuarter();
      return quarter === 4 ? this.year() - 1 : this.year();
    };

    dayjsClass.prototype.financialMonth = function () {
      const currentMonth = this.month() + 1;
      const offset = currentMonth - financialStartMonth;
      return offset < 0 ? 13 + offset : offset + 1;
    };

    const oldStartOf = dayjsClass.prototype.startOf;
    dayjsClass.prototype.startOf = function (units, startOf) {
      if (units === "financialYear") {
        const subMonth = (this.financialQuarter() - 1) * 3;
        return oldStartOf.bind(this.subtract(subMonth, "month").month(zeroBasedMonth))("month");
      }

      if (units === "financialQuarter") {
        const relativeMonth = (12 + (this.month() - zeroBasedMonth)) % 12;
        const left = Math.round(relativeMonth % 3);

        return this.subtract(left, "month").startOf("month");
      }

      return oldStartOf.bind(this)(units, startOf);
    };

    const oldEndOf = dayjsClass.prototype.endOf;
    dayjsClass.prototype.endOf = function (units, endOf) {
      if (units === "financialYear") {
        let start;
        if (this.financialQuarter() === 4) {
          start = oldStartOf.bind(this)("year").subtract(1, "year").month(zeroBasedMonth);
        }
        start = oldStartOf.bind(this)("year").month(zeroBasedMonth);
        return start.add(11, "month").endOf("month");
      }
      if (units === "financialQuarter") {
        return this.startOf("financialQuarter").add(2, "month").endOf("month");
      }
      return oldEndOf.bind(this)(units, endOf);
    };


    const oldisSame = dayjsClass.prototype.isSame;
    dayjsClass.prototype.isSame = function (date, units) {

      if (units === "financialYear") {
        const originalYear = this.financialYear()
        const compareYear = dayjsFactory(date).year();
        return originalYear === compareYear;
      }

      if (units === "financialQuarter") {
        const originalQuarter = this.financialQuarter();
        const compareQuarter = dayjsFactory(date).financialQuarter();
        return originalQuarter === compareQuarter;
      }

      return oldisSame.bind(this)(date, units);
    }
  };
}


