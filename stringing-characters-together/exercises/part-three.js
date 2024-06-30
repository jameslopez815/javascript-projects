//Part Three section one

let language = "JavaScript";

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
language = "JavaScript";
result = language.replace("ava","").replace("cript", "");
console.log(result);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
language = "Javascript";
console.log(`The abbreviation for '${language}' is '${result}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
language = "Javascript";
threeChainingMethods = language.slice(4).toUpperCase().replace("P", "b");
console.log(threeChainingMethods);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let splitStr = "title case";
splitStr = splitStr.replace("t", "T").replace("c", "C");
console.log(splitStr);
