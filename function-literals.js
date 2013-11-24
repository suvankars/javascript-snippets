#!/usr/bin/node

//Function Literal
//Created a variable called 'each' and store a function
//Using higher order function

var each = function(arr, foo){
    var i;
    for (i=0; i<arr.length; i++){
	foo(arr[i]);
    }
};

function fn(arg){
    console.log("element " + arg);
}

each([1,2,3,4], fn);
