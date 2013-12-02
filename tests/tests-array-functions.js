var nodeunit = require('nodeunit');

var arrays = require('../src/array-functions');


exports['count'] = nodeunit.testCase({
	'an empty array': function (test) {
		var isEven = function(n) {
			return (n%2) == 0;
		};
		test.equal(arrays.count([], isEven), 0);
		test.done();
	},

	'numeric arrays with predicate always returning true': function (test) {
		var alwaysTrue = function(n) {
			return true;
		};
			test.equal(arrays.count([2, 4, 6, 8], alwaysTrue), 4);
			test.done();
	},

	'numeric arrays with predicate always returning false': function (test) {
		var alwaysFalse = function(n) {
			return false;
		};
			test.equal(arrays.count([2, 4, 6, 8], alwaysFalse), 0);
			test.done();
	},

	'string arrays' : function(test) {
		var actual = arrays.count(["one", "two", "three"], function(e){
			return e.length <= 3;
		});
		test.equal(actual, 2);
		test.done();
	}

});


exports['head'] = nodeunit.testCase({
	'find head of an empty array': function (test) {
		var arrHead = arrays.head([]);
		test.equal(typeof(arrHead), 'undefined');
		test.done();
	},

	'find head of an numeric array': function (test) {
		var arrHead = arrays.head([2, 5, 7, 8, 9]);
		test.equal(arrHead, 2);
		test.done();
	}
});
