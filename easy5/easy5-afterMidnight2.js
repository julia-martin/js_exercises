const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;
const HOURS_PER_DAY = 24;

function afterMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  minutes = MINUTES_PER_HOUR - minutes;
  hours = HOURS_PER_DAY - 1 - hours;
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

// console.log(afterMidnight("00:00")); // === 0);
console.log(beforeMidnight("00:00")); // === 0);
// console.log(afterMidnight("12:34")); // === 754);
console.log(beforeMidnight("12:34")); // === 686);
// console.log(afterMidnight("24:00")); // === 0);
console.log(beforeMidnight("24:00")); // === 0);