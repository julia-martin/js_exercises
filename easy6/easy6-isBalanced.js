function isBalanced(str) {
  let symbols = [
    {type: "parens", count: 0, left: '(', right: ')'},
    {type: "squareBracks", count: 0, left: '[', right: ']'},
    {type: "curlyBracks", count: 0, left: '{', right: '}'},
    {type: "singleQuotes", count: 0, left: "'", right: "'"},
    {type: "doubleQuotes", count: 0, left: '"', right: '"'}
  ];
  for (let typeIdx = 0; typeIdx < symbols.length; typeIdx++) {
    let symbol = symbols[typeIdx];
    for (let strIdx = 0; strIdx < str.length; strIdx++) {
      if (str[strIdx] === symbol.left) {
        symbol.count += 1;
      } else if (str[strIdx] === symbol.right) {
        symbol.count -= 1;
      }
      if (symbol.count < 0) return false;
    }
    if (symbol.count !== 0) return false;
  }
  return true;
}

console.log(isBalanced('[(])abc'));
// console.log(isBalanced("What (is) this?")); // === true);
// console.log(isBalanced("What (is) this?")); // === true);
// console.log(isBalanced("What is) this?")); // === false);
// console.log(isBalanced("What (is this?")); // === false);
// console.log(isBalanced("((What) (is this))?")); //=== true);
// console.log(isBalanced("((What)) (is this))?")); // === false);
// console.log(isBalanced("Hey!")); // === true)
// console.log(isBalanced(")Hey!(")); // === false);
// console.log(isBalanced("What ((is))) up(")); // === false