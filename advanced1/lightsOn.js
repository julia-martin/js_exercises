function lightsOn(switches) {
  let lights = [...Array(switches)].fill(false);
  // switch lights on/off
  for (let count = 1; count <= switches; count++) {
    lights = lights.map((val, idx) => {
      return ((idx + 1) % count === 0) ? !val : val;
    });
  }
  // get switch #'s of on lights
  return lights.reduce((acc, val, idx) => {
    if (val) acc.push(idx + 1);
    return acc;
  }, []);
}

// console.log(lightsOn(5)); // [1, 4])
console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])