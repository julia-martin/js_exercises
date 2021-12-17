const BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
  ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'],
  ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockUsed(char, array) {
  return array.some(elem => elem.includes(char.toUpperCase()));
}

function blockAvailable(char) {
  for (let idx = 0; idx < BLOCKS.length; idx++) {
    if (BLOCKS[idx].includes(char.toUpperCase())) {
      return BLOCKS[idx];
    }
  }
  return undefined;
}

function isBlockWord(string) {
  let blocksUsed = [];
  return string.split('').every(char => {
    if (blockAvailable(char) && !isBlockUsed(char, blocksUsed)) {
      blocksUsed.push(blockAvailable(char));
      return true;
    } else {
      return false;
    }
  });
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false