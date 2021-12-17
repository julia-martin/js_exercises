// returns that string with all of the non-alphabetic characters
// replaced by spaces
function cleanUp(str) {
  let cleanedText = str.replace(/[^a-z]/gi, ' ').split(/\s+/gi).join(' ');
  return cleanedText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line ")