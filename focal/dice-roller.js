
const numOfDice = Number(process.argv.slice(2));

const random = function() {
  return Math.floor((Math.random() * 6) + 1);
};

const diceRoller = function(dice) {

  let string = "Rolled " + dice + " dice: ";
  let rolledDice = [];

  for (let i = 0; i < numOfDice; i++) {
    rolledDice.push(random());

  } return string + rolledDice.join(', ');
};

console.log(diceRoller(numOfDice));
