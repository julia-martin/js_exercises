function staggeredCase(string, countNonAlpha = false) {
  let newStr = '';
  let upper = false;
  for (let idx = 0; idx < string.length; idx++) {
    if ((/[a-z]/i).test(string[idx]) || countNonAlpha) {
      upper = !upper;
      if (upper) {
        newStr += string[idx].toUpperCase();
      } else {
        newStr += string[idx].toLowerCase();
      }
    } else {
      newStr += string[idx];
    }
  }
  return newStr;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);