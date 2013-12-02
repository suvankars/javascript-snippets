#!/usr/bin/node

/*Count
 *
-----

Counts the number of elements in the array a which satisfy a predicate p.
  a is an array.
  p is a predicate used to test elements.

Returns:
the number of elements satisfying the predicate p.
*/

exports.count = function (a, p) {
	var counter = 0;
	var i;
	for (i = 0; i < a.length ; i++){
	    if (p(a[i])) { counter++ }
	}
        return counter; 
}



/*
head
....

Selects the first element of this array.
    a is an array.
Returns:
    the first element of this array.
*/

exports.head = function (a) {
    return a[0];
}


/*
init
....

Selects all elements except the last.
    a is an array.
Returns:
    an array consisting of all elements of this array except the last one
*/

var init = function (a){
    return a.slice(0, (a.length-1));
}

init([1,2,3,4,5,6])  //Should return [1,2,3,4,5]

/*
last
.....

Selects the last element.
    a is an array.
Returns:
    The last element of this array.
*/

var last = function(a){
    return a[a.length-1];
}    
    
last([1,2,3,4,5]);  //Should return 5

/*
tail
....

Selects all elements except the first.
    a is an array.
Returns:
    a array consisting of all elements of this array except the first one
*/

var tail = function (a){
    return a.slice(1);
}

tail([1, 2, 3, 4, 5]);  // should return [2, 3, 4, 5]       
tail([1, 2]);	        // Should return [1]      
tail([]);	        // Should return []

/*Distinct
--------

Builds a new array from the given array without any duplicate elements.
a is an array
Returns:
a new array which contains the first occurrence of every element of this array.
*/




var distinct = function (a) {
    "use strict";
    var distinctArr = [], i;
    for (i = 0; i < (a.length); i++) {
        if (distinctArr.indexOf(a[i]) === -1) {
            distinctArr.push(a[i]);          
        }
    }
    return distinctArr;
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
    return a.slice(n);       // Should return [3, 4, 5]   
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
    function rightIndex(n) 
	{
        return (a.length - n);
    }
    return a.slice(0, rightIndex(n)); 
};

dropRight([1, 2, 3, 4, 5], 2); //should return the array [1, 2, 3]
dropRight([1, 2, 3, 4, 5], 10); //should return the array []



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
    var retain = [];
    for (i = 0; i < a.length; i++) {
        if (!p(a[i])) {
	    retain.push(a[i])
        }
    }
    return retain;     //should return the array [2, 4]
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

    /*
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

*/

function endsWith (a, b){

    var i = b.length-1;
    var j = a.length-1;

    for(i; i >= 0 ; i--){
	if(b[i] != a[j]){
	    return false;
	}
	j--;
    }
    return true;
}


endsWith([1,2,3,4,5], [3,4,5]); // should retun true;
endsWith([1,2,3,7,8,9], [7, 8, 9]); // should retun true;
endsWith([1,2,3,4,5], [3,6,5]); // should retun false;

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

/*
groupBy
.......

Partitions an array into an object of arrays according to some discriminator function.
    a is an array.
    f is the discriminator function.
Returns:
    An object from keys to arrays such every key k is bound to a array of those elements x for which f(x) equals k.
*/


var groupBy = function(a, f){
    var modGroup = {};
    var mod2 = [];
    var nonMod2 = [];

    a.map( function (a) { 
	if (modulo2(a)){ 
	    mod2.push(a);
	}
	else {
	    nonMod2.push(a); 
	}
    });

    modGroup[0] = mod2;
    modGroup [1] = nonMod2;

    return modGroup;
}

var modulo2 = function(e) {
    return e%2;
};

groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], modulo2)

    


/*
grouped
.......

Partitions elements in fixed size arrays.
    a is an array.
    size the number of elements per group.
Returns:
    An array of arrays of size size, except the last will be truncated if the elements don't divide evenly.
*/


//TBD more functional approach 
var grouped = function(a, size) {
    var group = [];
    var  start = 0;
    var i = Math.ceil(a.length/size);
    while(i != 0){
	var end = start + size;
	b = a.slice(start, end)
	group.push(b);
	start = end;
	i--;
    }
    return group;
};

grouped([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);



/*
union
.....

Produces a new sequence which contains all elements of this array and also all elements of a given sequence.
    a is an array.
    b is the array of elements to union with.
Returns:
    a new array which contains all elements of array a followed by all elements of array b.

*/    


var union = function(a,b) {
    u = a.concat(b);
    return u;
};
union( [1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]);    // should return the array [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8]
union( [1, 2, 2, 2, 5], [2, 2, 5, 6, 7, 8]);    // should return the array [1, 2, 2, 2, 5, 2, 2, 5, 6, 7, 8]

/*
zip
....

Returns an array formed from an array and another array by combining corresponding elements in pairs.
If one of the two arrays is longer than the other, its remaining elements are ignored.
    a is an array.
    b is the array providing the second half of each result pair.
Returns:
    a new array containing pairs consisting of corresponding elements of a and b. The length of the returned array is the minimum of the lengths of a and b.
*/



var zip = function(a, b) {
    minLength = Math.min (a.length, b.length)
    var i;
    zipedElm = [];
    for(i = 0; i < minLength ; i++){
	zipedElm.push([a[i], b[i]]);
    }	
    return zipedElm;

};


zip([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]) //  should return the array [[1,5], [2,4], [3,3], [4,2], [5,1]]
zip([1, 2, 3], [5, 4, 3, 2, 1]) //  should return the array [[1,5], [2,4], [3,3]
zip([1, 2, 3, 4, 5], [ 3, 2, 1]) //  should return the array [[1,3], [2,2], [3,1]]

