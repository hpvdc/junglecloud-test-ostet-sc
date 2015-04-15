var Rotation = require('./index.js');


var opt=({key:1});

var rot13 = new Rotation(opt);

var str='ABCD E~';
console.log('String: ',str);
//console.log(rot13.getKey());
var encoded = rot13.encode(str,1);
console.log('Encoded String: ',encoded);
var decoded = rot13.decode(encoded,1);
console.log('Decoded String: ',decoded);
