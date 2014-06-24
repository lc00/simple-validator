


function isNum(element, index, array){
	// console.log(element);
	return (element<=9 && element>=0);
}
var copy, passed;

var phoneNum = prompt("hey, what's your phone number; please " + '< /br>'+ 
	"type it in xxx-xxx-xxxx format");

copy = phoneNum.split('');
copy.splice(3,1);
copy.splice(6,1);
passed = copy.every(isNum);

while (phoneNum.length !== 12 || (phoneNum[3] !== '-' || phoneNum[7] !== '-') || passed !== true ){ 
	phoneNum = prompt('invalid entry; try again');
	copy = phoneNum.split('');
	copy.splice(3,1);
	copy.splice(6,1);
	passed = copy.every(isNum);

}




var birthDate = prompt("what's your birthday");

copy = birthDate.split('');
copy.splice(2,1);
copy.splice(4,1);
passed = copy.every(isNum);

while (birthDate.length !== 6 || (birthDate[2] !== '/' || birthDate[5] !== '/') || passed !== true) {
	birthDate = prompt("invalid birthday format, try again");
	copy = phoneNum.split('');
	copy.splice(2,1);
	copy.splice(5,1);
	passed = copy.every(isNum);

}
