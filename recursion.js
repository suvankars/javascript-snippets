#!/usr/local/bin/node

//Recursively iterating over an array using higher order function
//Created a variable called 'each' and store a function

var each = function(arr, foo){

	if (arr.length==0){
		return false; // stop further execution
	}

	foo(arr[0]);
	arr.shift();
	each(arr, foo);  
};	

var bands = ["Coldplay", "The Beatles", "Metallica","Pink Floyd", "Linkin Park", "The Doors"];
each(bands, function (band_name){
	console.log(band_name);
});
