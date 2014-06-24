


function isNum(element, index, array){
	// console.log(element);
	return (element<=9 && element>=0);
}
var phoneNumCopy, passed;

var phoneNum = prompt("hey, what's your phone number; please " + '< /br>'+ 
	"type it in xxx-xxx-xxxx format");


while (phoneNum.length !== 12 || (phoneNum[3] !== '-' || phoneNum[7] !== '-') || passed !== true ){ 
	phoneNum = prompt('invalid entry; try again');
	phoneNumCopy = phoneNum.split('');
	phoneNumCopy.splice(3,1);
	phoneNumCopy.splice(6,1);
	passed = phoneNumCopy.every(isNum);

}



var birthDate = prompt('what's your birthday);
if (birthDate[2] !== '/' && birthDate[5] !== '/')
	birthDate = prompt('invalid birthday format, please add '/' ');