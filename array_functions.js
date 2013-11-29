#!/usr/bin/node

/*Count
-----

Counts the number of elements in the array a which satisfy a predicate p.
  a is an array.
  p is a predicate used to test elements.

Returns:
the number of elements satisfying the predicate p.
*/

var count = function (a, p) {
        var filteredElm = (a.filter(p));
        return filteredElm.length;  //should return 2
    }

count([1, 2, 3], function(e){ 
    return e <= 2; 
});



/*Distinct
--------

Builds a new array from the given array without any duplicate elements.
a is an array
Returns:
a new array which contains the first occurrence of every element of this array.
*/




var distinct = function (a) {
    "use strict";
    var uniqueElm = [], i;
    for (i = 0; i < (a.length); i++) {
        if (uniqueElm.indexOf(a[i]) === -1) {
            uniqueElm.push(a[i]);          
        }
    }
    return uniqueElm;
};

distinct([1, 2, 1, 2, 3]);


/*
 Drop
 .....

Selects all elements except first n ones.
    a is an array
    n is the number of elements to drop from this array.
returns
    an array consisting of all elements of the given array except the first n ones, or else the empty array, if this array has less than n elements.
*/

var drop = function (a, n) {
    a.splice(0, n);
    return a;       // Should return [3, 4, 5]   
};

drop([1, 2, 3, 4, 5], 2); 



/*    
dropRight
.........

Selects all elements except last n ones.
    a is an array
    n is the number of elements to take
Returns:
    an array consisting of all elements of the given array except the last n ones, or else the empty array, if this array has less than n elements.
*/

var dropRight = function (a, n) {
    function rightIndex(n) {
        return (a.length - n);
    }
    a.splice(rightIndex(n), n);
    return a;  //should return the array [1, 2, 3]
};

dropRight([1, 2, 3, 4, 5], 2);


/*	
	dropWhile
	.........

	Drops longest prefix of elements that satisfy a predicate.
		a is an array.
		p is a predicate.
	Returns:
		the longest suffix of this array whose first element does not satisfy the predicate p.
*/

function isOdd(e) {
    return (e % 2) !== 0;
}

var dropWhile = function (a, p) {
    var i;
    for (i = 0; i < a.length; i++) {
        if (p(a[i])) {
            a.splice(i, 1);
        }
    }
    return a;     //should return the array [2, 4]
};


dropWhile([1,2,3,4,5], isOdd);	




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

(endsWith([1,2,3,4,5], [23,4,5])) // should retun true;

/*
Filter
......

Selects all elements of this array which satisfy a predicate.
    a is an array.
    p the predicate used to test elements.
Returns:
    a new array consisting of all elements of this array that satisfy the given predicate p. The order of the elements is preserved.
*/

function filterElement (a,p){
	var filteredElement = a.filter(isEven);
	return filteredElement; //should return the array [2, 4, 6, 8, 10]
}


var isEven = function (e){
	return e%2 == 0;
}

filterElement([1,2,3,4,5,6,7,8,9,10], isEven)

/*
filterNot
.........
Selects all elements of this array which do not satisfy a predicate.
    a is an array.
    p is the predicate used to test elements.
Returns:
    a new array consisting of all elements of this array that do not satisfy the given predicate p. The order of the elements is preserved.
*/

function filterNot(a,p){
	var filteredElement = a.filter(isEven);
	return filteredElement; //should return the array [1, 3, 5, 7, 9]
}

var isEven = function(e){
	return (e%2) != 0;
}

filterNot([1,2,3,4,5,6,7,8,9,10], isEven)

/*
find
....

Finds the first element of the array satisfying a predicate, if any.
    a is an array.
    p is the predicate used to test elements.
Returns:
    An option value containing the first element in the array that satisfies p, or None if none exists.
*/



var find = function (a, p) {
	var i;
	for (i = 0; i < a.length; i += 1) {
		if (p(a[i])) {
			return a[i];
		}
	}
	return null;
};

var isEven = function (e) {
	return (e % 2) === 0;
};

find([1, 2, 3], isEven);  //Should return 2



/*
 flatMap
 .......

 Builds a new array by applying a function to all elements of this array and using the elements of the resulting collections.
     a is an array.
     f is the function to apply to each element.
 Returns:
     a new array resulting from applying the given collection-valued function f to each element of this array and concatenating the results.
 */

var flatMap = function(a, f) {
	modifiedArray = a.map(f)
	var flattened = modifiedArray.reduce(function(a, b) {
		return a.concat(b);
	});
	return flattened;
};

flatMap([1, 2, 3, 4, 5], function(e){ return [2 * e]; })	     // should return the array [2, 4, 6, 8, 10]
flatMap([1, 2, 3, 4, 5], function(e){ return [1, 2 * e];})           // should return the array [1, 2, 1, 4, 1, 6, 1, 8, 1, 10] 
flatMap([1, 2, 3, 4, 5], function(e){ return [parseInt(2 / e), parseInt(2 * e)]; })      // should return the array [2, 2, 1, 4, 0, 6, 0, 8, 0, 10] 


/*
flatten
.......

Converts an array of arrays into a array formed by the elements of these arrays.
    a is an array of arrays.
Returns:
    a new array resulting from concatenating all element array.
*/

function flatten(a) {
   var acc = a.reduce(function (a, b) {
            return a.concat(b); 
     });
    return acc;
}

flatten([[1, 2, 3, 4, 5], [1, 2, 3]]);


/*
fold
....

Folds the elements of this array using the specified associative binary operator. The order in which operations are performed on elements is unspecified and may be nondeterministic.
    a is an array.
    z a neutral element for the fold operation; may be added to the result an arbitrary number of times, and must not change the result.
    op is a binary operator function that must be associative.
Returns:
    the result of applying fold operator op between all the elements and z

    The FoldFunction is one of the CommonHigherOrderFunctions. It generally takes a sequence, a function of two arguments, and an initial value (often the "identity" value of the function--i.e. 0 for addition, 1 for multiplication, false for boolean OR, negative infinity for maximum, etc.) and combines the sequence by applying the function to the sequence's end element and the result of recursively folding the function over the rest of the sequence. Folds can be left-associative (foldl) or right-associative (foldr) -- can start at either end of the list.
*/

function fold(a, z, op) {
    rv = a.reduce(op);
    return rv;
}
 
var add = function(a, b) {return (a + b);};
var mult = function(a, b) {return (a * b);};
 
fold([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, add);
fold([1, 2, 3, 4, 5], 1, mult);

/*
forall
......

Tests whether a predicate holds for all elements of this array.
    a is an array.
    p is the predicate used to test elements.
Returns:
    true if the given predicate p holds for all elements of this array, otherwise false.
*/


function forall (a, p) {
    rv = a.every(p);
    return rv;
};

var greaterThanFive = function(e) { 
    return e > 5; 
};

var greaterThanZero = function(e) {
    return e > 0;
};

var lessThanEleven = function(e) {
    return e < 11;
};

forall(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), lessThanEleven)   // should return true
forall([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], greaterThanZero)    // should return true
forall([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], greaterThanFive )   //should return false




