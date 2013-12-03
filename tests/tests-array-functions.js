var nodeunit = require('nodeunit');

var arrays = require('../src/array-functions');


var eachEqual = function (a, b) {
		var i;
		for (i = 0; i < a.length; i++){
			if (a[i] != b[i]){ return false;};
		}
		return true;
}

var isOdd = function (n) {
	return (n % 2) !== 0;
};

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
	'of an empty array': function (test) {
		var arrHead = arrays.head([]);
		test.equal(typeof (arrHead), 'undefined');
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
		test.equal(typeof (arrInit.val), 'undefined');
		test.done();
	},

	'select all element of an string array, except last one': function (test) {
		var arrInit = arrays.init(['uno', 'dos', 'tres']);
		test.equal(eachEqual(arrInit, ['uno', 'dos']), true);
		test.done();
	},

	'select all element of an numeric array, except last one': function (test) {
		var arrInit = arrays.init([1, 2, 3, 4, 5]);
		test.equal(eachEqual(arrInit, [1, 2, 3, 4]), true);
		test.done();
	},

	'numeric arrays with false test condition': function (test) {
		var arrInit = arrays.init([1, 2, 3, 4, 5]);
		test.equal(eachEqual(arrInit, [1, 3, 4]), false);
		test.done();
	}
});

exports['tail'] = nodeunit.testCase({
	'an empty array': function (test) {
		var arrTail = arrays.tail([]);
		test.equal(typeof (arrTail.val), 'undefined');
		test.done();

	},

	'selects all elements except the first from an string array': function (test) {
		var arrTail = arrays.tail(['JavaScript', 'Ruby', 'RoR']);
		test.equal(eachEqual(arrTail, ['Ruby', 'RoR']), true);
		test.done();
	},

	'select all, except first element from an numeric array': function (test) {
		var arrTail = arrays.tail([1, 2, 3, 4, 5]);
		test.equal(eachEqual(arrTail, [2, 3, 4, 5]), true);
		test.done();
	}
});


exports['distinct'] = nodeunit.testCase({
	'an empty array': function (test) {
		var distinctArr = arrays.distinct([]);
		test.equal(typeof (distinctArr.val), 'undefined');
		test.done();
	},

	'an unique numeric array': function (test) {
		var distinctArr = arrays.distinct([1, 1, 2, 2, 3, 3, 4, 5]);
		test.equal(eachEqual(distinctArr, [1, 2, 3, 4, 5]), true);
		test.done();
	},

	'an unique string array': function (test) {
		var arrTail = arrays.distinct(['Rooney', 'Tevez', 'Ibra', 'Emmanuel', 'Emmanuel']);
		test.equal(eachEqual(arrTail, ['Rooney', 'Tevez', 'Ibra', 'Emmanuel']), true);
		test.done();
	}

});

exports['drop'] = nodeunit.testCase({
	'an empty array': function (test) {
		var dropElm = arrays.drop([], 0);
		test.equal(typeof (dropElm.val), 'undefined');
		test.done();
	},

	'an unique numeric array': function (test) {

		var modifiedArr = arrays.drop([1, 2, 3, 4, 5], 2);
		test.equal(eachEqual(modifiedArr, [3, 4, 5]), true);
		test.done();
	},

	'an unique string array': function (test) {
		var arrTail = arrays.drop(['Red', 'Blue', 'Green', 'Black'], 2);
		test.equal(eachEqual(arrTail, ['Green', 'Black']), true);
		test.done();
	}

});

exports['dropRight'] = nodeunit.testCase({
	'an empty array': function (test) {
		var dropElm = arrays.dropRight([], 0);
		test.equal(typeof (dropElm.val), 'undefined');
		test.done();
	},

	'an unique numeric array': function (test) {
		var modifiedArr = arrays.dropRight([1, 2, 3, 4, 5], 2);
		test.equal(eachEqual(modifiedArr, [1, 2, 3]), true);
		test.done();
	},

	'an unique string array': function (test) {
		var arrTail = arrays.dropRight(['Raptor', 'Sukhoi', 'Typhoon', 'Rafale'], 2);
		test.equal(eachEqual(arrTail, ['Raptor', 'Sukhoi']), true);
		test.done();
	}
});

exports['dropWhile'] = nodeunit.testCase({
	'an empty arrays': function (test) {
		var retain = (arrays.dropWhile([], isOdd));
		test.equal(retain.length, 0);
		test.done();
	},
	'an unique numeric array': function (test) {
		var retain = (arrays.dropWhile([1, 2, 3, 4, 5], isOdd));
		test.equal(eachEqual(retain, [2, 4]), true);
		test.done();
	},

}); 


