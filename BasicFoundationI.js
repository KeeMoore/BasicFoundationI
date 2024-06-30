// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get1to255() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}
get1to255();

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function getEven1000() {
    var sum = 0;
    for (var i = 2; i <= 1000; i += 2) {
        sum += i;
    }
    return sum;
}
getEven1000();

// 3.Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.

function sumOdd5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i += 2) {
        sum += i;
    }
    return sum;
}
sumOdd5000();

// 4. Iterate an array - Write a function that returns the sum of all the values within an array.

function iterateArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
iterateArray([1, 2, 5]);

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
findMax([-3, 3, 5, 7]);

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
findAverage([1, 3, 5, 7, 20]);

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.

function arrayOdd() {
    var arr = [];
    for (var i = 1; i < 50; i += 2) {
        arr.push(i);
    }
    return arr;
}
arrayOdd();

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.

function greaterThanY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
greaterThanY([1, 3, 5, 7], 3);

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
squares([1, 5, 10, -2]);

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
negatives([1, 5, 10, -2]);

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return [max, min, avg];
}
maxMinAvg([1, 5, 10, -2, 3]);

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
swapValues([1, 5, 10, -2]);

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
numberToString([-3, -1, 1, -2]);
