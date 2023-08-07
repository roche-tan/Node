// How to export different functions. With object. Down we have the properties. We can export variable or constant. In this case, we export an object
const Math = {};

function add (x1, x2){
  return x1 + x2;
}

function substract (x1, x2){
  return x1 - x2;
}

function multiply (x1, x2){
  return x1 * x2;
}

function divide (x1, x2){
  if(x2 == 0){
    console.log('Cannot divide by 0');
  }else{
    return x1 / x2;
  }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

/* export a function 
function hello(name){
  console.log('Hello ', name);
}

module.exports = hello;*/


/*exports.add = add; //to export
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/