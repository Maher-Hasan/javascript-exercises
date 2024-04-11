const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
    if (!Array.isArray(array)){
      return ("input should be an array")
    }
    else if (array.length == 0) {
      return 0;
    }
    else if (array.length == 1){
    return array[0];
    }
    
    let result = 0
    for (i=0; i<array.length;i++){
      result += array[i];
    }
    return result;
};

const multiply = function(array) {
  let result = 1;
  for (i=0; i<array.length; i++){
    result *= array[i];
  }
  return result;
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(n) {
	if ( n < 0) {
    return "Factorial is defined only for non-negative integers.";
}

if (n === 0) {
    return 1;
}

return n * factorial(n - 1);
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
