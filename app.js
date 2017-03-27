'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Each member of the class should have the following: an attack power (which is a number), and a health power (which is also a number) as well as an attack method (which attacks the opposing player if Math.random() is higher than 0.5).

var Character = function () {
  function Character(name, attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
    this.name = name;
  }

  _createClass(Character, [{
    key: 'attackMethod',
    value: function attackMethod() {
      var roll = Math.random();
      if (roll > 0.5) return this.attackPower;else return 0;
    }
  }, {
    key: 'isDefeated',
    value: function isDefeated() {
      return this.health <= 0;
    }
  }]);

  return Character;
}();

var red = new Character('red', 5, 12);
var blue = new Character('blue', 3, 16);

// let winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
// winnerArr.map((item) => ({ winner: item }) );

var battle = function battle(char1, char2) {
  if (char1.isDefeated()) return char2.name + ' wins!';
  if (char2.isDefeated()) return char1.name + ' wins!';
  char2.health -= char1.attackMethod();
  return battle(char2, char1);
};
