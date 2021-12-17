const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

function timeOfDay(num) {
  let hours = Math.floor(num / MINUTES_PER_HOUR);
  if (Math.abs(hours) >= HOURS_PER_DAY) {
    hours %= HOURS_PER_DAY;
  }
  if (hours < 0) {
    hours = (hours + HOURS_PER_DAY) % HOURS_PER_DAY;
  }
  let minutes = num % MINUTES_PER_HOUR;
  if (minutes < 0) {
    minutes = (minutes + MINUTES_PER_HOUR) % MINUTES_PER_HOUR;
  }
  return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
}


console.log(timeOfDay(0)); // === "00:00");
console.log(timeOfDay(-3)); // === "23:57");
console.log(timeOfDay(35)); // === "00:35");
console.log(timeOfDay(-1437)); // === "00:03");
console.log(timeOfDay(3000)); // === "02:00");
console.log(timeOfDay(800)); // === "13:20");
console.log(timeOfDay(-4231)); // === "01:29");