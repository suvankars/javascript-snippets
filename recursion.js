#!/usr/local/bin/node

//Recursively iterating over an array using higher order function
//Created a variable called 'each' and store a function

var bands = ["Coldplay", "The Beatles", "Metallica","Pink Floyd", "Linkin Park", "The Doors"];
n  = bands.length;

var each = function(arr, foo){

	if (n==0){
		return false; // stop further execution
	}
	foo(arr[bands.length-n]);
	n -= 1
	each(arr, foo);  
};	

each(bands, function (band_name){
	console.log(band_name);
});

