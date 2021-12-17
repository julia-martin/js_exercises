function dms(num) {
  while (num < 0) {
    num += 360;
  }
  while (num > 360) {
    num -= 360;
  }
  let degrees = Math.floor(num);
  let remaining = num - degrees;
  let minutes = Math.floor(remaining * 60);
  remaining = (remaining * 60) - minutes;
  let seconds = Math.round(remaining * 60);
  return `${degrees}˚${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
}

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 60°00'00"