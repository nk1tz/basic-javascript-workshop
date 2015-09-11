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
    var i = 0;
    var rep = "";
    for(i=0;i<num;i++){
        rep += string;
    }
    return rep;
}
console.log(repeat("Eminem", 8));



















