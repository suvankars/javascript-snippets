#!/usr/bin/node

/*
Filter
......

Selects all elements of this array which satisfy a predicate.
    a is an array.
    p the predicate used to test elements.
Returns:
    a new array consisting of all elements of this array that satisfy the given predicate p. The order of the elements is preserved.
*/

function filter(a,p){
    console.log(a.filter(isEven));
}


var isEven = function (e){
    return e%2 == 0;
}

filter([1,2,3,4,5,6,7,8,9,10], isEven)
