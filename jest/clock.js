class Clock {
  constructor(hour, minute = 0) {
    this.hour = hour % 24;
    this.minute = minute;
  }

  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  toString() {
    return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}`;
  }

  add(totalMinutes) {
    let [hours, minutes] = this._minsToHours(totalMinutes);
    this.hour = (this.hour + hours) % 24;
    this.minute = this.minute + minutes;
    if (this.minute >= 60) {
      this.hour++;
      this.minute -= 60;
    }
    return this;
  }

  subtract(totalMinutes) {
    let [hours, minutes] = this._minsToHours(totalMinutes);
    this.hour = this.hour - hours;
    this.minute = this.minute - minutes;
    if (this.minute < 0) {
      this.hour--;
      this.minute += 60;
    }
    while (this.hour < 0) {
      this.hour += 24;
    }
    this.hour %= 24;
    return this;
  }

  isEqual(clock) {
    return this.hour === clock.hour && this.minute === clock.minute;
  }

  _minsToHours(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return [hours, minutes];
  }
}

module.exports = Clock;