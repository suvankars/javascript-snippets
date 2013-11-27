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

    function filterElement(a,p){
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
	var filteredElement = a.filter(isEven)
	return filteredElement; //should return the array [1, 3, 5, 7, 9]
    }

    var isEven = function(e){
	return e%2 != 0;
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


    function find(a,p){
	var matchFound = 'None';
	for (i in a ){
	    if (isEven(a[i])){
		matchFound = a[i];
		break;
	    }
	}
	return matchFound; //should return 2
    }
    var isEven = function (e){
	return e%2==0;
    }

find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven)
