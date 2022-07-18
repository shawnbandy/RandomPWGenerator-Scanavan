// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordResult = document.querySelector("#password");
  
  passwordResult.value = passwordText; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//*list of all characters that can be in the password
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "|", "{", "}"];




function generatePassword() {

  //*empty password string
  var passwordLength = "";

  //*ask user for password length, parse the int from input
  passwordLength = prompt("Please enter a password length, from 8 to 128." , "8");
  passwordLength = parseInt(passwordLength);


  //*these if statements are to prevent user from inputting improper values
  if(isNaN(passwordLength) == true){
    alert("Stop trying to break me >:( Enter a real number");
    return;
  }
  if(passwordLength < 8){
    alert("Number inputted was too low. 8 characters have been selected for your password's length");
    passwordLength = 8;
  }
  if(passwordLength > 128){
    alert("Number inputted was too high. 128 characters have been selected for your password's length");
    passwordLength = 128;
  }

  //*final array will be the collection of all characters that the user wants in their password
  passwordText = "";
  var finalArray = [""];

  //*these bools are for asking the user if they want specific characters in their password
  var lowerCaseBool = confirm("Would you like the password to contain lowercase letters? Hit 'Cancel' for no.");
  var upperCaseBool = confirm("Would you like the password to contain uppercase letters? Hit 'Cancel' for no.");
  var numericBool = confirm("Would you like the password to contain  numbers? Hit 'Cancel' for no.");
  var specialCharBool = confirm("Would you like the password to contain special characters? Hit 'Cancel' for no.");

  //*throwing this catch in there if the user says they don't want any characters in their password
  if (lowerCaseBool + upperCaseBool + numericBool + specialCharBool == 0){
    alert("How can you have a password with no characters 🤔? Try again");
    return;
  }

  //*below if statements are to check if the user has answered yes to wanting specific characters in their PW
  //*if user answered yes, then the character array is added to finalArray
  //*lastly, we choose a random character from the original array to add to PW, reasons below
  if(lowerCaseBool == true){
    finalArray = finalArray.concat(lowercaseArr);
    passwordText += lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
  }
  if(upperCaseBool == true){
    finalArray = finalArray.concat(uppercaseArr);
    passwordText += uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
  }
  if(numericBool == true){
    finalArray = finalArray.concat(numericArr);
    passwordText += numericArr[Math.floor(Math.random() * numericArr.length)];
  }
  if(specialCharBool == true){
    finalArray = finalArray.concat(specialcharArr);
    passwordText += specialcharArr[Math.floor(Math.random() * specialcharArr.length)];
  }

  //*for statement sets i to holder value, then loops through the following:
  //*generate a randomNumber, then add a character from finalArray at index of randomNumber until PW length is achieved 
  for(var i = passwordText.length; i < passwordLength; i++){
    var randomElement = Math.floor(Math.random() * finalArray.length);
    passwordText += finalArray[randomElement];
  }

}


