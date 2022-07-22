// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define function for genrate password based on selected criteria
function generatePassword() {
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*_-=+:;~";
  var passwordString = "";

  //Condition for select which criteria to include in the password
  
  // Password Length
  let passwordLength = prompt(
    "Please enter length of the password which should be between 8 - 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter valid number of characters.";
  } else if (isNaN(passwordLength)) {  // Verify if it's not a number.
    return "Please enter valid number."
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

  // Has lower case
  let lowerCase = confirm("Do you want to add lower case characters?");
  if (lowerCase) {
    passwordString = passwordString.concat(lowerCaseChars);
    console.log("1 ", passwordString);
    alert("Your Password will have lower case characters");
  } else {
    alert("Your Password will not have lower case characters");
  }

  // Has upper case
  let upperCase = confirm("Do you want to add upper case characters?");
  if (upperCase) {
    passwordString = passwordString.concat(upperCaseChars);
    console.log("2 ", passwordString);
    alert("Your Password will have upper case characters");
  } else {
    alert("Your Password will not have upper case characters");
  }

  // Has Numeric
  let numericCase = confirm("Do you want to add numeric case characters?");
  if (numericCase) {
    passwordString = passwordString.concat(numericChars);
    alert("Your Password will have numeric case characters");
  } else {
    alert("Your Password will not have numeric case characters");
  }

  // Has special symbol
  let specialCase = confirm("Do you want to add special case characters?");
  if (specialCase) {
    passwordString = passwordString.concat(specialChars);
    alert("Your Password will have special case characters");
  } else {
    alert("Your Password will not have special case characters");
  }

// Condition for select at least one criteria
  if (
    lowerCase === false &&
    upperCase === false &&
    numericCase === false &&
    specialCase === false
  ) {
    return "Please select at least one character type.";
  }

  let password = "";
  // Generate random password based on length 
  for (let i = 0; i < passwordLength; i++) {
    password += passwordString.charAt(
      Math.floor(Math.random() * passwordString.length)
    );
  }
  return password;
}
