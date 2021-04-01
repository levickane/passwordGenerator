// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  console.log('hello')
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

function generatePassword() {
  let charAmount = 0
  let toLowerChars = false
  let toUpperChars = false
  let numberChars = false
  let specialChars = false

  charAmount = prompt(
    'What is the length of your desired password ( 8 < password > 128)'
  )
  while (charAmount < 8 || charAmount > 128) {
    alert('Please pick a number between 8 and 128')
    charAmount = prompt(
      'What is the length of your desired password ( 8 < password > 128'
    )
  }
  console.log(charAmount)

  //confirming password criteria
  toLowerChars = confirm(
    'Would you like to use lower case letters in your password?'
  )
  toUpperChars = confirm(
    'Would you like to use UPPER CASE letters in your password?'
  )
  numberChars = confirm('Would you like to use numbers in your password?')
  specialChars = confirm(
    'Would you like to use special characters in your password?'
  )
  console.log(specialChars)
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
