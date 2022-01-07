// print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
})();

// print all odd numbers in an array using anonymous function

var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arro[i]);
        }
    }
}
ano(arr);

//convert all strings to title cap using IIFE function

var arr = ["jaya", "sowmi", "janani", "pavi", "ranjani"];

(function() {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();


//convert all strings to title cap using anonymous function

var ano = function(arro) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano(arr);

//sum of all numbers using IIFE function

var arr = [9,8,5,6,4,3,2,1];

(function() {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

//sum of all numbers using anonymous function

var ano = function(arro) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
ano(arr);

//return all prime numbers using IIFE function
var arr = [3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < arr[i]; k++) {
            if (k == arr[i] - 1) {
                console.log(arr[i]);
            } else if (arr[i] % k == 0) {
                break;
            }
        }
    }
})();

//return all prime numbers using anonymous function
var ano = function(arro) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < arr[i]; k++) {
            if (k == arr[i] - 1) {
                console.log(arr[i]);
            } else if (arr[i] % k == 0) {
                break;
            }
        }
    }
}
ano(arr);

//return all palindromes in an array using IIFE function
var arr = ["ashiq", 1, 343, 5775, 7, 77, "malayalam", "maam", 'ant'];

(function() {
    for (var k = 0; k < arr.length; k++) {
        str = arr[k].toString();
        if (str.length == 1) {
            console.log(str);
        }
        if (str.length % 2 == 0) {
            var L = str.length / 2;
        } else {
            var L = Math.floor(str.length / 2);
        }
        for (var i = 0; i < L; i++) {
            if (str[i] != str[str.length - i - 1]) {
                break;
            } else if (i == L - 1) {
                console.log(str);
            }
        }
    }
})();

//return all palindromes in an array using anonymous function
var ano = function(arro) {
    for (var k = 0; k < arr.length; k++) {
        str = arr[k].toString();
        if (str.length == 1) {
            console.log(str);
        }
        if (str.length % 2 == 0) {
            var L = str.length / 2;
        } else {
            var L = Math.floor(str.length / 2);
        }
        for (var i = 0; i < L; i++) {
            if (str[i] != str[str.length - i - 1]) {
                break;
            } else if (i == L - 1) {
                console.log(str);
            }
        }
    }
}
ano(arr);

//return 2 sorted arrays of 2 sorted arrays using IIFE function
var arr = [1, 2, 3, 6, 8, 9, 10, 12, 13];
var arr1 = [4, 6, 8, 9, 12, 14, 16, 20, 25];

(function() {
    if (arr.length % 2 == 0) {
        var len = arr.length / 2;
        console.log("median of first array is " + arr[len - 1] + " " + arr[len]);
        console.log("median of second array is " + arr1[len - 1] + " " + arr1[len]);
    } else {
        var len = Math.floor(arr.length / 2);
        console.log("median of first array is " + arr[len]);
        console.log("median of second array is " + arr1[len]);
    }

})();

//return 2 sorted arrays of 2 sorted arrays using anonymous function
var ano = function(arro) {
    if (arr.length % 2 == 0) {
        var len = arr.length / 2;
        console.log("median of first array is " + arr[len - 1] + " " + arr[len]);
        console.log("median of second array is " + arr1[len - 1] + " " + arr1[len]);
    } else {
        var len = Math.floor(arr.length / 2);
        console.log("median of first array is " + arr[len]);
        console.log("median of second array is " + arr1[len]);
    }
}
ano(arr);

//remove duplicate from an array using IIFE function
var arr = [1, 2, 3, 6, 2, 8, 6, 1, 9, 9, 10, 12, 13, 6];

(function() {
    var out = [];
    count = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == arr[k]) {
                break;
            } else if (k == 0) {
                out[count] = arr[i];
                count += 1;
            }
        }
        out[count] = arr[0];
    }
    for (i = out.length - 1; i >= 0; i--) {
        console.log(out[i]);
    }

})();

//remove duplicate from an array using anonymous function
var ano = function(arro) {
    var out = [];
    count = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == arr[k]) {
                break;
            } else if (k == 0) {
                out[count] = arr[i];
                count += 1;
            }
        }
        out[count] = arr[0];
    }
    for (i = out.length - 1; i >= 0; i--) {
        console.log(out[i]);
    }
}
ano(arr);

//rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(out);

})();

//rotate an array by k times and return rotated array using anonymous function
var ano = function(arro) {
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(out);
}
ano(arr);