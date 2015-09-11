function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var theNumber = randomIntFromInterval(1,100);
alert("I have chosen a number between 1 and 100, you have 6 tries to guess.");
var flag = false;

function compare(guess, target){
    if(guess == target){
        alert("Congratulations! You have correctly guessed THE number!");
        flag = true;
    }else if(guess < target){
        alert("You're low");
    }else if(guess > target){
        alert("You're high");
    }
}
 
for(var i=1; i<7; i++){
    var guess = prompt("What is your guess #"+i+"?");
    compare(guess,theNumber);
    if(flag) break;
}
if(!flag){
    alert("You suck!")
} else{
    alert("The end!");
}