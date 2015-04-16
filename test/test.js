var assert = require("assert");
var Rotation = require('../index.js');


describe('Rotation', function(){
	describe('getKey', function(){
		it('Should return the key passed in the constructor', function(){
			var rot13 = new Rotation({key:13});
			assert.equal(rot13.getKey(), 13);
			var rotl1 = new Rotation({key:-1});
			assert.equal(rotl1.getKey(), -1);
		});
	});
});


describe('Rotation', function(){
	describe('encode',function(){
		it('Should return string "ABCDE" encoded', function(){
			var rot13 = new Rotation({key:13});
			var str = 'ABCDE';
			assert.equal(rot13.encode(str), 'NOPQR');
			
		});
	});
});


describe('Rotation', function(){
	describe('decode',function(){
		it('Should return string "NOPQR" decoded', function(){
			var rot13 = new Rotation({key:13});
			var str = 'NOPQR';
			assert.equal(rot13.decode(str), 'ABCDE');
			
		});
	});
});
