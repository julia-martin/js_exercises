function leadingSubstrings(string) {
  return string.split('').reduce((acc, _, idx, array) => {
    acc.push(array.slice(0, idx + 1).join(''));
    return acc;
  }, []);
}

function substrings(string) {
  return string.split('').reduce((acc, _, idx, array) => {
    let substr = array.slice(idx).join('');
    return acc.concat(leadingSubstrings(substr));
  }, []);
}

function palindromes(str) {
  let result = [];
  let substrArr = substrings(str);
  substrArr.forEach(elem => {
    if (elem.length > 1 && elem === elem.split('').reverse().join('')) {
      result.push(elem);
    }
  });
  return result;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

