#!/usr/bin/node

var person = {"name": "Suvankar",
	      "email" : "suvankar@abc.com",
	      "phone no" : 033456789	};

person.organization = "RS Software";
var pr;

//The enumeration will include all of the properties including functions and prototype
//The for in statement can loop over all of the property names in an object

for (pr in person) {console.log(pr+ " is "+ person[pr])};

