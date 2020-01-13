const calculator = (function(num1, num2) {
  return {
    add: function(num1, num2) {
      return num1 + num2;
    },

    subtract: function(num1, num2) {
      return num1 - num2;
    },

    multiply: function(num1, num2) {
      return num1 * num2;
    },

    divide: function(num1, num2) {
      return num1 / num2;
    },
  };
})();

calculator.add(10, 20);

module.exports = calculator;
