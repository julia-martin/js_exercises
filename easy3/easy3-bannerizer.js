function logInBox(text, maxWidth) {
  if (text.length > maxWidth - 2) {
    text = text.slice(0, maxWidth - 2);
  }
  console.log(`+${'-'.repeat(text.length + 2)}+`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`| ${text} |`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`+${'-'.repeat(text.length + 2)}+`);
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('');