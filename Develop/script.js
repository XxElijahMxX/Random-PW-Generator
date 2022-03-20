var passwordEl = document.querySelector("#password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




function generatePassword() {

// 1. Prompt user for the password requirements
// Password length needs to be 8-128
// Prompt user if using lower case, uppercase, numbers, special characters
  var passLength = prompt("How many characters should this password be? Pick a number between 8 and 128.");

  if ((passLength >= 8) && (passLength <= 128)) {

    // 3. Generate password based on criteria
    
   
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var password = ""

    var genSymbols = confirm("Would you like to use special characters? i.e. (!, $, %, etc.)");
    var genNumbers = confirm("Would you like to use numbers?");
    var genLowerCase = confirm("Would you like to use lowercase letters?");
    var genUpperCase = confirm("Would you like to use uppercase letter?");
    
      for (var i=0; i<passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
      }
       return password += chars.substring(randomNumber, randomNumber)+1;
  }
 // 4. Display generated password on the page
  

 
// 3. Generate password based on criteria
  

}

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordEl.textContent = newPassword;
