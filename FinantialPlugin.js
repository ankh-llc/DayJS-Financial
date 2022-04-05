import dayjs from "dayjs";

export default (option, dayjsClass, dayjsFactory) => {
  dayjsClass.prototype.financialQuarter = function () {
    const quarter = Math.floor(this.month() / 3);
    return quarter || 4;
  };

  dayjsClass.prototype.financialYear = function () {
    const quarter = this.financialQuarter()
    return quarter === 4 ? this.year() - 1 : this.year();
  };


  const oldEndOf = dayjsClass.prototype.endOf;
  dayjsClass.prototype.endOf = function (units, endOf) {
    if (units === "financialYear") {
      let start;
      if (this.financialQuarter() === 4) {
        start = oldStartOf.bind(this)("year").subtract(1, "year").month(3);
      }
      start = oldStartOf.bind(this)("year").month(3);
      return start.add(11, "month").endOf("month");
    }
    if (units === "financialQuarter") {
      const actualMonth = this.month() + 1;
      const left = Math.round(actualMonth % 3);
      const addMonth = left ? 3 - left : 0;
      return this.add(addMonth, "month").endOf("month");
    }
    return oldEndOf.bind(this)(units, endOf);
  };

  const oldStartOf = dayjsClass.prototype.startOf;
  dayjsClass.prototype.startOf = function (units, startOf) {
    if (units === "financialYear") {
      if (this.financialQuarter() === 4) {
        return oldStartOf.bind(this)("year").subtract(1, "year").month(3);
      }
      return oldStartOf.bind(this)("year").month(3);
    }

    if (units === "financialQuarter") {
      return this.endOf("financialQuarter").add(1, "day").subtract(3, "month").startOf("month");
    }

    return oldStartOf.bind(this)(units, startOf);
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
