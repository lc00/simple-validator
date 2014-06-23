

var phoneNum = prompt("hey, what's your phone number; please " +'< /br>'+ 
	"type it in xxx-xxx-xxxx format");




while (phoneNum.length !== 12){
	phoneNum = prompt('please make sure that you are entering the entire number');
}

while (phoneNum[3] !== '-' || phoneNum[7] !== '-') {
	phoneNum = prompt('please add dashes');
}

phoneNumCopy = phoneNum.split('');
phoneNumCopy.splice(3,1);
phoneNumCopy.splice(6,1);

console.log(phoneNumCopy);


function isNum(element, index, array){
	// console.log(element);
	return (element<=9 && element>=0);
}

var passed = phoneNumCopy.every(isNum);

while ( passed !== true ){
	prompt('please enter only numbers');
}


// var birthDate = prompt('what's your birthday);
// if (birthDate[2] !== '/' && birthDate[5] !== '/')
// 	birthDate = prompt('invalid birthday format, please add '/' ');