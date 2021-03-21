// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?abcdefghijklmnopqrstuvwxyz1234567890"
var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%&*?1234567890"
var capSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?1234567890"
var capOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var noSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

generatePassword = function() {
  var generated="";
  var numberOf = prompt("How many characters would you like your password to be? choose a number between 8 and 128.");
  
  
  
  if(numberOf>=8 && numberOf<=128){

    var upperLower = confirm("Would you like upper and lowercase letters? Choose 'OKAY' for both, and 'CANCEL' for uppercase only.");
    var specialConfirm = confirm("Choose OKAY if you would like special characters and CANCEL if you do not.");

    if(upperLower && specialConfirm){
      for(var i=0; i<numberOf; i++){
        generated += charset.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
        
      }
      return generated;
    }
    if(!upperLower && specialConfirm){
      for(var i=0; i<numberOf; i++){
        generated += capSpecial.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    }
    if(upperLower && !specialConfirm){
      for(var i=0; i<numberOf; i++){
        generated += capSpecial.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
    }
    if(!upperLower && !specialConfirm){
      for(var i=0; i<numberOf; i++){
        generated += capOnly.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    }
  }
  else {
    alert("you must choose a valid number of characters.")
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
