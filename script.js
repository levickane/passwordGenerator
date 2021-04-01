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
  //setting initial values
  let charAmount = 0
  let toLowerChars = false
  let toUpperChars = false
  let numberChars = false
  let specialChars = false
  //character options
  let lowerCharsOptions = 'abcdefghijklmnopqrstuvwxyz'
  let upperCharsOptions = 'ABCDEFGHIJKLMNOPQRSTUVWSYZ'
  let numCharsOptions = '0123456789'
  let specCharsOptions = '!@#$%^&*()'

  charAmount = prompt(
    'What is the length of your desired password ( 8 < password > 128)'
  )
  while (charAmount < 8 || charAmount > 128) {
    alert('Please pick a number between 8 and 128')
    charAmount = prompt(
      'What is the length of your desired password ( 8 < password > 128'
    )
  }

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

  //adding characters to the password string
  let passwordChars = ''
  if (toLowerChars) {
    passwordChars += lowerCharsOptions
  }
  if (toUpperChars) {
    passwordChars += upperCharsOptions
  }
  if (numberChars) {
    passwordChars += numCharsOptions
  }
  if (specialChars) {
    passwordChars += specCharsOptions
  }

  let newPassword = ''
  //explains Math.random https://www.codecademy.com/forum_questions/50c386a4a122749bc1006ca6
  for (let i = 0; i < charAmount; i++) {
    //We're not using the +1 at the end of Math.random() because we're not starting at 0
    //We're starting at 1. So there's no need to add the +1 at the end. If I do,
    //every once in a while, there will be a char=undefined
    let char = Math.floor(Math.random() * passwordChars.length)
    newPassword += passwordChars[char]
  }
  return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
