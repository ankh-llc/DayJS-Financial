export default (option, dayjsClass, dayjsFactory) => {
  dayjsClass.prototype.financialQuarter = function () {
    const quarter = Math.floor(this.month() / 3);
    return quarter || 4;
  };

  dayjsClass.prototype.financialYear = function () {
    const quarter = this.financialQuarter()
    return quarter === 4 ? this.year() - 1 : this.year();
  };

  const oldStartOf = dayjsClass.prototype.startOf;
  dayjsClass.prototype.startOf = function (units, startOf) {
    if (units === "financialYear") {
      if (this.financialQuarter() === 4) {
        return oldStartOf.bind(this)("year").subtract(1, "year").month(3);
      }
      return oldStartOf.bind(this)("year").month(3);
    }
    return oldStartOf.bind(this)(units, startOf);
  };
};
