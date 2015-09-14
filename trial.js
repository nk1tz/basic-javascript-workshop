var array2 = [11, 9, 13, 12, 5];
function sumOfArray(arr){
    return arr.reduce(function(total, num) {
    return total + num });
}
console.log(sumOfArray(array2));