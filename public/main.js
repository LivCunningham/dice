let dice = 0

// gen random number when button clicked//
const rollTheDice = () => {
  Roll = Math.ceil(Math.random() * 6)
  console.log('you roll a' + Roll)
  document.querySelector('.result').value = Roll
}

document.querySelector('button').addEventListener('click', rollTheDice)
