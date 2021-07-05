let passVariables = [];
let poolTotal = "";
let passwordFinal = "";
let charLower = "abcdefghijklmnopqrstuvwxyz";
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charNumber = "0123456789";
let charSpecial = "!#$%&'()*,-./:;<=>?@[]^_`{|}~";
let passwordText = document.querySelector("#password");

let generatePassword = function() {
  passwordFinal = "";
  passVariables = [];
  poolTotal = "";

  let promptLength = Number(prompt("Please enter the desired length by typing a number from 8-128.", "8-128"));

  if (promptLength == false) {
    return;
  }

  if ((promptLength < 8) || (promptLength > 128) || isNaN(promptLength)) {
    alert("Please provide a valid length.");
    return generatePassword();

  } else {
    passVariables[0] = promptLength;

    let promptLower = confirm("Would you like to include lower case letters?");
    passVariables[1] = promptLower;

    let promptUpper = confirm("Would you like to include upper case letters?");
    passVariables[2] = promptUpper;

    let promptNumber = confirm("Would you like to include numeric characters?");
    passVariables[3] = promptNumber;

    let promptSpecial = confirm("Would you like to include special characters?");
    passVariables[4] = promptSpecial;
    console.log(passVariables);

    variableConfirm();
  };     
};

let variableConfirm = function() {
  if (passVariables[1] === false && passVariables[2] === false && passVariables[3] === false && passVariables[4] === false) {
    alert("Please choose at least one character type.");
    return generatePassword();
  } else {
    variableCompile();
  };
};

let variableCompile = function() {
  if (passVariables[1] == true) {
    poolTotal += charLower;
  };
  if (passVariables[2] == true) {
    poolTotal += charUpper;
  };
  if (passVariables[3] == true) {
    poolTotal += charNumber;
  };
  if (passVariables[4] == true) {
    poolTotal += charSpecial;
  };
  createPassword();
};

let createPassword = function() {
  for (let i = 0; i < passVariables[0]; i++) {
    let randomChar = poolTotal.charAt(Math.floor(Math.random() * poolTotal.length));
    passwordFinal += randomChar;   
  };
  console.log(passwordFinal);
  passwordText.value = passwordFinal;
};

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);
