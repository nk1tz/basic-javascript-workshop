// 1 - Takes in a string and outputs first character
function firstChar(string){
    return string[0];
}
console.log(firstChar("Ziad"));

// 2 - Takes in a string and outputs last character
function lastChar(string){
        return string[string.length - 1];
}
console.log(lastChar("Nathaniel"));

// 3 - Takes a string and a number and return char at position of number
function specificChar(string,num){
     return string[num];
}
console.log(specificChar("Kayla", 4));

// 4 - Takes two numbers and adds them
//If strings are passed this function returns "NaN"
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply("Cough","hi"));

// 5 - Takes two numbers and adds them together
//If strings are passed this function returns "NaN"
function addition(num1,num2){
    return num1+num2;
}
console.log(addition(43,89));

// 6 - add, sub, div, or mult two numbers with this function
function operate(num1,num2,string){
    switch (string) {
        case 'add':
            return addition(num1,num2);
            break;
        case 'sub':
            return num1-num2;
            break;
        case 'mult':
            return multiply(num1,num2);
            break;    
        case 'div':
            return num1/num2;
            break;
            
        default:
            return 0;
    }
}
console.log(operate(21,7,"div"));

// 7 - reapeat a string "n" times
function repeat(string,num){
    var rep = "";
    for(var i=0;i<num;i++){
        rep += string;
    }
    return rep;
}
console.log(repeat("Eminem", 8));

// 8 - reverse a string
function reverse(s){
     var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
console.log(reverse("Nice face potato smacker"));

// 9 - Returns the Factorial of a number "num"
function factorial(num)
{
    if (num < 0) { //reject negative nums
        return "That's negative number!";
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(8));

// 10 - Return longest word in a sentence
function findLongestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(findLongestWord("I am a man, in a city and I cannot believe the people around me"));

// 11 - Capitalize first letters of words, everything else lower case
function upperCaseFirstLetters( string )
{
    var chunks = string.split(" ");
    for (var i = 0; i < chunks.length; i++)
    {
        var u = chunks[i].charAt(0).toUpperCase();
        chunks[i] = u + chunks[i].substr(1).toLowerCase();
    }
    return chunks.join(" ");
}
console.log(upperCaseFirstLetters("JumP eveRyBodY! JUMP! jump! i need you to jUmP everyBody!"));

// 12 - Here is a function which returns the largest value in an array.
var someNumbers=[34,22,41,28,4,33,42,18,25];
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(       getMaxOfArray(someNumbers)       );







































