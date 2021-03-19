// Assignment code here
var blankString = "";
var characters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "?",
  "."
]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  
  characters = prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
  if (characters>8 && characters<128) {
    
    
    specialCharacters();
    console.log("right")
    
  }
  else {
    prompt("You must choose valid characters!");
    generatePassword();
  }
}
function specialCharacters() {
  special = prompt("Which special characters would you like to add You can use '!@#$%&*?.'");
  if (special === characters) {
    console.log("correct");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("works");
