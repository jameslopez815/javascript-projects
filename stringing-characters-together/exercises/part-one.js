let num = 1001;

//Returns 'undefined'.
let text = num.toString();
//Use type conversion to print the length (number of digits) of an integer.
console.log(text.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num1 = "123.45";
console.log(num1.length);

//Not sure how to make to modify the code to print out the length of a decimal value EXCLUDING the period.
let result = num1.slice(0,3) + num1.slice(4,6);
console.log(result);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){
  console.log(String(num).length-1);
  } else {
  console.log(String(num).length);
  }