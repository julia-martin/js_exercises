// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string.
//  The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

function randChar(length) {
  let alphabet = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += alphabet[Math.floor(Math.random() * 16)];
  }
  return result;
}

function uuid() {
  let uuid = randChar(8) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(12);
  return uuid;
}

console.log(uuid());
