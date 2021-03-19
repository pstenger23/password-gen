// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  window.prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
  if (prompt>8 || prompt<128) {
    
  }
  else {
    alert("You must choose between 8 and 128 characters.")
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("works");
