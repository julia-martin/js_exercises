let munstersDescription = "The Munsters are creepy and spooky.";
let munstersLetters = munstersDescription.split("");
for (let i = 0; i < munstersLetters.length; i++) {
  if (munstersLetters[i] === munstersLetters[i].toUpperCase()) {
    munstersLetters[i] =  munstersLetters[i].toLowerCase();
  } else {
    munstersLetters[i] =  munstersLetters[i].toUpperCase();
  }
}
console.log(munstersLetters.join(""));
