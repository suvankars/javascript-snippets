#! /usr/local/bin/node

//nesting a function within a function
//The nested inner function is private to its outer function
//Only statement in outer function can access inner function
//The inner function can use the arguments and variables of the outer function
//


function evaluateExpression(x,y){

	function square(val){
		return val*val;
	};
		
	return square(x) + square(y);
};	

// Evaluating Expression (x2 + y2 ) and storing result in result variable
  
result = evaluateExpression(2, 4); 
console.log(result);

//specify arguments for both the outer and inner function

	function outerAdder(x){
		function innerAdder(y){
			return x+y;
		};
		return innerAdder;
	};

//Adding two number
result=outerAdder(3)(5)
console.log(result);
