
exports.min = function min (arr){
    if (arr === undefined) return 0;
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (number > arr[i]) {
            number = arr[i];
        }
    }
    return number;
}

exports.max = function max (arr){
    if (arr === undefined) return 0;
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (number < arr[i]) {
            number = arr[i];
        }
    }
    return number;
}

exports.avg = function avg (arr){
    if (arr === undefined) return 0;
    if (arr.length === 0 ) {
        return 0;
    }
    let number = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        number += arr[i];
        counter++ 
    }
    number = number / counter;
    return number;
}
