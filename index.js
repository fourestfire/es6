// Each member of the class should have the following: an attack power (which is a number), and a health power (which is also a number) as well as an attack method (which attacks the opposing player if Math.random() is higher than 0.5).

class Character {
  constructor (attackPower, health) {
    this.attackPower = attackPower;
    this.health = health
  }

  attackMethod() {
    let roll = Math.random();
    if (roll > 0.5) {return this.attackPower}
  }
}

