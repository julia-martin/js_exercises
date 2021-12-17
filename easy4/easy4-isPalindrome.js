function isPalindrome(string) {
  string = string.replace(/\W/gi, '').toLowerCase();
  // console.log(string);
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // true
console.log(isPalindrome("Madam, I'm Adam"));     // true
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome('356a653'));             // true
console.log(isPalindrome('123ab321'));            // false