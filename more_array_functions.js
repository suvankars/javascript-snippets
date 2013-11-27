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





