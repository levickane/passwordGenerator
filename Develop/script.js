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
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
