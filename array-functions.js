#!/usr/bin/node

/*Count
-----

Counts the number of elements in the array a which satisfy a predicate p.
  a is an array.
  p is a predicate used to test elements.

Returns:
the number of elements satisfying the predicate p.

*/

var count = function(a, p) {
	var satisfiedElements = (a.filter(p));
	console.log("number of element that satisfying the predicate, is " + satisfiedElements.length);
    }
count([1, 2, 3], function(e){ 
    return e <= 2; 
}) 

/*Distinct
--------

Builds a new array from the given array without any duplicate elements.
a is an array
Returns:
a new array which contains the first occurrence of every element of this array.
*/




var distinct = function(a) {
    unique = [];
    for (var i in a ) {
	if (unique.indexOf(a[i]) == -1){
	    unique.push(a[i])
	}
    }	
    console.log("Unique new array " + unique)
};


distinct([1, 2, 1, 2, 3])


/*
 Drop
 .....

Selects all elements except first n ones.
    a is an array
    n is the number of elements to drop from this array.
returns
    an array consisting of all elements of the given array except the first n ones, or else the empty array, if this array has less than n elements.
*/



var drop = function(a, n){
    a.splice(0,n)
    console.log("Left Reduced array " + a)
};

drop([1, 2, 3, 4, 5], 2)

/*    
dropRight
.........

Selects all elements except last n ones.
    a is an array
    n is the number of elements to take
Returns:
    an array consisting of all elements of the given array except the last n ones, or else the empty array, if this array has less than n elements.
*/

var dropRight = function(a, n){
    function rightIndex(n){
	return a.length-n;
    }
    a.splice(rightIndex(n), n) //should return the array [1, 2, 3].
    console.log("Right Reduced array " + a)

};

dropRight([1, 2, 3, 4, 5], 2)

