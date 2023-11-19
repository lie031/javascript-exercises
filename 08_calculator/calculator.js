const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
	 return array.reduce((sum,element)=> sum+element,0);
}

const multiply = function(array) {
  return array.reduce((product,element)=> product*element,1)
};

const power = function(base,exp) {
  return base**exp;
};

const factorial = function(num) {
  if(num===0)return 1;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
