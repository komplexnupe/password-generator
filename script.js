// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "&", "$", "%"]

var numberOfCharacters = parseInt(prompt("Your password can be 8-128 characters. How long would you like it to be?"))

var pwInput = []
var pwString = ''

if(numberOfCharacters >= 8) {
  alert("Got it! Let's get started.");
} else {
  alert("Too short. We'll let it slide this time.");
}

if (confirm("Would you like to include lowercase letters?")) {
  pwInput.push(lowercase)
}
if (confirm("Would you like to include uppercase letters?")) {
  pwInput.push(uppercase)
}
if (confirm("Would you like to include numbers?")) {
  pwInput.push(numeric)
}
if (confirm("Would you like to include special characters?")) {
  pwInput.push(specialCharacters)
}

console.log(numberOfCharacters, pwInput)

for (var i = 0; i < numberOfCharacters; i++) {
  var randomCharacterType = Math.floor(Math.random() * pwInput.length)
  var randomCharacter = Math.floor(Math.random() * pwInput.length)
  var randomPasswordCharacter = pwInput[randomCharacterType][randomCharacter]
  pwString += randomPasswordCharacter
  console.log(randomCharacterType, randomCharacter, randomPasswordCharacter)
}

console.log(pwString)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return pwString
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

