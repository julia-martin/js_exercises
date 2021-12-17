class Meetup {
  static DAYS_OF_WEEK = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
  };

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.date = undefined;
  }

  day(dayOfWeek, which) {
    const daysInMonth = this._getDaysInMonth();
    switch (which.toLowerCase()) {
      case 'teenth':
        for (let day = 13; day <= 19; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
      case 'first':
        for (let day = 1; day <= 7; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
      case 'second':
        for (let day = 8; day <= 14; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
      case 'third':
        for (let day = 15; day <= 21; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
      case 'fourth':
        for (let day = 22; day <= 28; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
      case 'fifth':
        for (let day = 29; day <= daysInMonth; day++) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
        return null;
      case 'last':
        for (let day = daysInMonth; day >= 22; day--) {
          if (this._makeDate(day).getDay() === Meetup.DAYS_OF_WEEK[dayOfWeek.toLowerCase()]) {
            this.date = day;
            return this;
          }
        }
    }
  }

  toString() {
    let dateObj = new Date(this.year, this.month - 1, this.date);
    return dateObj.toString();
  }

  _getDaysInMonth(month) {
    return new Date(this.year, this.month, 0).getDate();
  }
  _makeDate(day) {
    return new Date(this.year, this.month - 1, day);
  }
}

module.exports = Meetup;

// let meetup = new Meetup(2013, 3);
// console.log(meetup.day('Monday', 'first').toString()); // Mar 4, 2013