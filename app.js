"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Each member of the class should have the following: an attack power (which is a number), and a health power (which is also a number) as well as an attack method (which attacks the opposing player if Math.random() is higher than 0.5).

var Character = function () {
  function Character(attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
  }

  _createClass(Character, [{
    key: "attackMethod",
    value: function attackMethod() {
      var roll = Math.random();
      if (roll > 0.5) {
        return this.attackPower;
      }
    }
  }]);

  return Character;
}();
