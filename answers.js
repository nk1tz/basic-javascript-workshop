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