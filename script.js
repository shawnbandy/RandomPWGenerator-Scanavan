// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//*press button, then a popup comes up
//*popup has like checkboxes that the user can press
//*these checkboxes include length, min 8 max 128
//*types of characters include lowercase, uppercase, numeric, special characters
//*for each type of character selected, there should be one in the password
//*a finish button that lets the program know when to generate the password
//*lastly, password should be generated upon finish button hit

//*getting a random lowercase

//*listing all options for LC, UP, Num, SC
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "|", "{", "}"];

//*Making this var an int parsed from user input
var passwordLength;



//*this string will represent the password, we will add to it depending on passwordLength
var passwordText = "";

//*Got this random idea from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
//*As I understand, math.random gives a random decimal less than 1, so we multiply it by the length of the array, then round it to a whole number with math.floor
//*this will most likely have to be moved to the for loop so we can randomize each time before we get a character
var randomCharacter = Math.floor(Math.random() * lowercaseArr.length);
var randomNum = Math.floor(Math.random() * numericArr.length);

var randomLowerCase = lowercaseArr[randomCharacter];
var randomUpperCase = uppercaseArr[randomCharacter];
var randomNumeric = numericArr[randomNum];
var randomSpecial = specialcharArr[randomCharacter];

console.log(randomLowerCase);
console.log(randomUpperCase);
console.log(randomNumeric);
console.log(randomSpecial);

//*if statement for the little box being checked and if true, it adds to a number for the upcoming switch statement
var numberOfCriteriaChecked;
//*if (boxCheck == true){ numberOfCriteriaChecked++ }

//*for loop to add to the passwordText with different characters

for(var i = 0; i < passwordLength; i++){
  passwordText;
}
