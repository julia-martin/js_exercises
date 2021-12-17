function letterPercentages(string) {
  let total = string.length;
  let lowercaseCnt = 0;
  let uppercaseCnt = 0;
  let neitherCnt = 0;
  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      lowercaseCnt += 1;
    } else if (char >= 'A' && char <= 'Z') {
      uppercaseCnt += 1;
    } else {
      neitherCnt += 1;
    }
  });
  return {
    lowercase: (100 * (lowercaseCnt / total)).toFixed(2),
    uppercase: (100 * (uppercaseCnt / total)).toFixed(2),
    neither: (100 * (neitherCnt / total)).toFixed(2)
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }