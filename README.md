#The main objective of this modulo is to encrypt strings and blobs in JavaScript language, based on a process of encryption, named Substitution Cipher.

#


#Para se usar o modulo, inicialmente terá de se criar uma variavel options, que tem um atributo key. esta key é que define como vai ficar o dicionario encriptado.

Ex:
var opt=({key:13});
var rot13 = new Rotation(opt);
var str='ABCDE';
var encoded = rot13.encode(str);
	//Resultado esperado : encoded = 'NOPQR';
var decoded = rot13.decode(encoded);
	//Resultado esperado : decoded = 'ABCDE';


#Na minha opinião e visto que nunca tinha abordado JavaScript, penso que a avaliação foi uma mais valia para ficar á vontade com a linguagem. Foi um bom teste para iniciar Javascript.

