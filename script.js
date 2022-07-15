// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("test");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "|", "{", "}"];

var passwordLength = "";


function buttonPressing() {
  passwordLength = prompt("Please enter a password length, from 8 to 128." , "8");
  console.log("This is pre parse " + passwordLength);
  passwordLength = parseInt(passwordLength);
  console.log("This is post parse " + passwordLength);

  if(isNaN(passwordLength) == true){
    alert("Stop trying to break me >:( Enter a number!!!");
    return;
  }

  passwordText = "";
  var finalArray = [""];



  if(passwordLength < 8){
    alert("Number inputted was too low. 8 characters have been selected for your password's length");
    passwordLength = 8;
  }
  
  if(passwordLength > 128){
    alert("Number inputted was too high. 128 characters have been selected for your password's length");
    passwordLength = 128;
  }

  

  var lowerCaseBool = confirm("Would you like the password to contain lowercase letters? Hit 'Cancel' for no.");
  var upperCaseBool = confirm("Would you like the password to contain uppercase letters? Hit 'Cancel' for no.");
  var numericBool = confirm("Would you like the password to numbers? Hit 'Cancel' for no.");
  var specialCharBool = confirm("Would you like the password to contain special characters? Hit 'Cancel' for no.");

  if (lowerCaseBool + upperCaseBool + numericBool + specialCharBool == 0){
    alert("How can you have a password with no characters 🤔? Try again");
    return;
  }

  if(lowerCaseBool == true){
    finalArray = finalArray.concat(lowercaseArr);
  }
  if(upperCaseBool == true){
    finalArray = finalArray.concat(uppercaseArr);
  }
  if(numericBool == true){
    finalArray = finalArray.concat(numericArr);
  }
  if(specialCharBool == true){
    finalArray = finalArray.concat(specialcharArr);
  }

  for(var i = 0; i < passwordLength; i++){
    var randomElement = Math.floor(Math.random() * finalArray.length);
    passwordText += finalArray[randomElement];
  }

  alert(passwordText);

}


