


function isNum(element, index, array){
	// console.log(element);
	return (element<=9 && element>=0);
}

var phoneNum, copy, passed;
var birthDate, state, married;

do{
	phoneNum = prompt("hey, what's your phone number; please " + 
		"type it in xxx-xxx-xxxx format");

	copy = phoneNum.split('');
	copy.splice(3,1);
	copy.splice(6,1);
	passed = copy.every(isNum);
	}while (phoneNum.length !== 12 || (phoneNum[3] !== '-' || phoneNum[7] !== '-') || passed !== true );

alert("valid phone number");


do{
	birthDate = prompt("what's your birthday");

	copy = birthDate.split('');
	copy.splice(2,1);
	copy.splice(4,1);
	passed = copy.every(isNum);

}while (birthDate.length !== 8 || (birthDate[2] !== '/' || birthDate[5] !== '/') || passed !== true);

alert("valid birth date");


do{
	state = prompt("What is the abbreviation of your state");
	stateCap = state.toUpperCase();
} while (state.length !== 2 || state !== stateCap);

do{
	married = prompt("Are you married");

} while( married !== "YES" || married !=="Yes" || married !=="yes" || married !== "no" );