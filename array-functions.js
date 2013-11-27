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

    a.splice(rightIndex(n), n)
	return a;
}; //should return the array [1, 2, 3]

dropRight([1, 2, 3, 4, 5], 2)

/*	
	dropWhile
	.........

	Drops longest prefix of elements that satisfy a predicate.
		a is an array.
		p is a predicate.
	Returns:
		the longest suffix of this array whose first element does not satisfy the predicate p.
*/

function isOdd(e){
	return (e%2) !=0;
};


var dropWhile = function(a,p){
	for(var i in a){
		if (isOdd(a[i])){
			a.splice(i, 1);
		}
	}
	return a;
};	

dropWhile([1,2,3,4,5], isOdd);	//should return the array [2, 4]




/*
 endsWith
 ........

 Tests whether this array ends with the given sequence.
	 a is an array.
	 b the sequence to test.
 Returns:
	 true if this array has b as a suffix, false otherwise.
*/

function endsWith(a,b){
	foundMatch = true;
	if (a.length >= b.length) {
		startIndex = a.length - b.length
	} else {
		return !foundMatch;
	}
	
	for (i in b){
		if (a[(startIndex+parseInt(i))] != b[i]){
			foundMatch = false;
			return foundMatch;
		}
	}
	return foundMatch;
}

(endsWith([1,2,3,4,5], [23,4,5]) // should retun true;
