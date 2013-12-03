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
	},
	'find head of an string array': function (test) {
		var arrHead = arrays.head(['uno', 'dos', 'tres']);
		test.equal(arrHead, 'uno');
		test.done();
	}
});

exports['init'] = nodeunit.testCase({
	'an empty array': function (test) {
		var arrInit = arrays.init([]);
		test.equal(typeof(arrInit.val), 'undefined');
		test.done();
	},

	'select all element of an string array, except last one': function (test) {
		var eachEqual = function (a, b) {
			var i;
			for (i = 0; i < a.length; i++){
				if (a[i] != b[i]){ return false;};
			}
			return true;
		}
		var arrInit = arrays.init(['uno', 'dos', 'tres']);
		test.equal(eachEqual(arrInit, ['uno', 'dos']), true);
		test.done();
	},

	'select all element of an numeric array, except last one': function (test) {
		var eachEqual = function (a, b) {
			var i;
			for (i = 0; i < a.length; i++){
				if (a[i] != b[i]){ return false;};
			}
			return true;
		}
		var arrInit = arrays.init([1, 2, 3, 4, 5]);
		test.equal(eachEqual(arrInit, [1, 2, 3, 4]), true);
		test.done();
	},

	'numeric arrays with false test condition': function (test) {
		var eachEqual = function (a, b) {
			var i;
			for (i = 0; i < a.length; i++){
				if (a[i] != b[i]){ return false;};
			}
			return true;
		}
		var arrInit = arrays.init([1, 2, 3, 4, 5]);
		test.equal(eachEqual(arrInit, [1, 3, 4]), false);
		test.done();
	}
});

