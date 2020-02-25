
exports.min = function min (arr){
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (number > arr[i]) {
            number = arr[i];
        }
    }
    return number;
}

exports.max = function max (arr){
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (number < arr[i]) {
            number = arr[i];
        }
    }
    return number;
}

exports.avg = function avg (arr){
    let number = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        number += arr[i];
        counter++ 
    }
    number = number / counter;
    return number;
}
