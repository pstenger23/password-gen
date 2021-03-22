// Assignment Code
var generateBtn = document.querySelector("#generate");

var fullCharset = "ACFGEDBH5ILJMKN!OPQR$STUV&WXYZ%*?adbce78fhijgk@lm#nop2q9rsuvtxwyz13460"
var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%&*?."
var specialOnly = "?*&%$#@!.6253814790?*&%$#@!."
var lettersOnly = "abmQlFitcJkSLnzxyrdgHMGoPqAUjDesCwVXOvRKIupBEfThWNYZ"
var upperOnly = "AFQDHXOVJLETKCGPUIRMNYWBSZ"
var lowerOnly = "avfgpxscbutimnyqhrkjlowdez"
var capSpecial = "AFBGECDH5ILKMJNOPQR$SUTV&WXYZ@#$!.%&*?"



generatePassword = function() {
  //where the generated password goes
  var generated="";
  //window prompts/criteria
  var numberOf = prompt("How many characters would you like your password to be? choose a number between 8 and 128.");
  var upperConfirm = confirm("Would you like capital letters? Choose OKAY if Yes, and 'CANCEL' if No.");
  var lowerConfirm = confirm("Would you like lowercase letters? Choose 'OKAY' if Yes, and 'CANCEL' if No.");
  var specialConfirm = confirm("Would you like Secial Characters and Numbers in your password? Choose 'OKAY' if Yes, and CANCEL if No.");
  
  
  //if number of characters is correct
  switch (numberOf>=8 && numberOf<=128){

    //IF ALL CHARACTERS
    case (upperConfirm && lowerConfirm && specialConfirm):
      
      for(var i=0; i<numberOf; i++){
        generated += fullCharset.charAt(Math.floor(Math.random() * numberOf));
      }
      return generated;
    
    //IF UPPERCASE AND SPECIAL ONLY
    case(!upperConfirm && lowerConfirm && specialConfirm ):
      for(var i=0; i<numberOf; i++){
        generated += lowerSpecial.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;

    case(!upperConfirm && !lowerConfirm && specialConfirm):
      for(var i=0; i<numberOf; i++){
        generated += specialOnly.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    
    //IF BOTH UPPER AND LOWER CASE ONLY
    case (upperConfirm && lowerConfirm && !specialConfirm):
      for(var i=0; i<numberOf; i++){
        generated += lettersOnly.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    
    case(upperConfirm && !lowerConfirm && !specialConfirm):
      for(var i=0; i<numberOf; i++){
        generated += upperOnly.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    
    //IF UPPER CASE ONLY
    case (!upperConfirm && !specialConfirm && lowerConfirm):
      for(var i=0; i<numberOf; i++){
        generated += lowerOnly.charAt(Math.floor(Math.random() * numberOf))
        console.log(generated);
      }
      return generated;
    
    case (upperConfirm && specialConfirm && !lowerConfirm):
      for(var i=0; i<numberOf; i++){
        generated += capSpecial[(Math.floor(Math.random() * numberOf))]
        console.log(generated);
      }
      return generated;
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
