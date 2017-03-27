// Each member of the class should have the following: an attack power (which is a number), and a health power (which is also a number) as well as an attack method (which attacks the opposing player if Math.random() is higher than 0.5).

class Character {
  constructor (name, attackPower, health) {
    this.attackPower = attackPower;
    this.health = health;
    this.name = name
  }

  attackMethod() {
    let roll = Math.random();
    if (roll > 0.5) return this.attackPower;
    else return 0;
  }

  isDefeated() {
    return (this.health <= 0)
  }
}

const red = new Character('red', 5, 12);
const blue = new Character('blue', 3, 16);

// let winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
// winnerArr.map((item) => ({ winner: item }) );

const battle = function (char1, char2) {
  if (char1.isDefeated()) return `${char2.name} wins!`;
  if (char2.isDefeated()) return `${char1.name} wins!`;
  char2.health -= char1.attackMethod();
  return battle(char2, char1);
}
