//Constructor
function Rotation(opt)
{
	this.opt=opt;
};

//Prototype to get the key to encode/decode the string
Rotation.prototype.getKey = function()
{
	return opt.key;
};

//Function to encode the string.
//The numbers of char codes i use is from 32 ('Space') to 125 ('}')
Rotation.prototype.encode = function(str)
{
	var i=0;
	var encodedStr;
	var strTmp, intTmp;
	for(;i<str.length;i++)
	{
		//	-> If the char code of the char we read, plus the key number that the user gives,
		//	is greater than the 125, the alphabet retrieves to initial state (32), and sums
		//	the difference between them.
		if(opt.getKey+str.charCodeAt(i)>125)
		{
			intTmp=opt.getKey+str.charCodeAt(i)-125;
			strTmp=charCodeAt(32+intTmp);
		}else
		{
			strTmp=charCodeAt(opt.getKey+str.charCodeAt(i));
		}
		encodedStr+=strTmp;
	}
	
	return encodedStr;
};

//Function to decode the string.
//The numbers of char codes i use is from 32 ('Space') to 125 ('}')
Rotation.prototype.decode = function(str)
{
	
};

