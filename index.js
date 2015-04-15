//Constructor
function Rotation(opt)
{
	this.opt=opt;
};

//Prototype to get the key to encode/decode the string
Rotation.prototype.getKey = function(opt)
{
	return opt.key;
};

//Function to encode the string.
//The numbers of char codes i use is from 32 ('Space') to 125 ('}')
Rotation.prototype.encode = function(str,key)
{
	var i=0;
	var encodedStr='';
	var strTmp, intTmp;
	for(;i<str.length;i++)
	{
		
		if( str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 125 )
		{
			
			//	-> If the char code of the char we read, plus the key number that the user gives,
			//	is greater than the 125, the alphabet retrieves to initial state (32), and sums
			//	the difference between them.
			if(key+str.charCodeAt(i)>125)
			{
				intTmp=key+str.charCodeAt(i)-125;
				strTmp=String.fromCharCode(32+intTmp);
			}else
			{
				strTmp=String.fromCharCode(key+str.charCodeAt(i));
			}
		} else
		{
			strTmp = str[i];
		}

		encodedStr+=strTmp;
	}
	
	return encodedStr;
};

//Function to decode the string.
//The numbers of char codes i use is from 32 ('Space') to 125 ('}')
Rotation.prototype.decode = function(str,key)
{	
	var i=0;
	var decodedStr='';
	var strTmp, intTmp;
	for(;i<str.length;i++)
	{
		
		if( str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 125 )
		{
			
			//	-> If the char code of the char we read, minus the key number that the user gives,
			//	is smaller than 32, the alphabet retrieves to final state (125), and subtracts
			//	the difference between them.
			if(str.charCodeAt(i)-key<32)
			{	
				intTmp=32-(str.charCodeAt(i)-key);
				strTmp=String.fromCharCode(125-intTmp);
			}else
			{
				strTmp=String.fromCharCode(str.charCodeAt(i)-key);
			}
		} else
		{
			strTmp = str[i];
		}

		decodedStr+=strTmp;
	}
	
	return decodedStr;
};


module.exports=Rotation;

