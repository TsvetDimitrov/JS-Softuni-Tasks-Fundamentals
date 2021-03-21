// Yet again you have forgotten your password... Naturally it`s not the first time this has happened. 
// Actually you got so tired of it that you decided to help yourself with a smart solution. 

// Write a password reset program that performs a series of commands upon a predefined string. 
// First, you will receive a string and afterwards, until the command "Done" is given, you will be 
// receiving strings with commands split by a single space. The commands will be the following:
// •	TakeOdd
// o	 Takes only the characters at odd indices and concatenates them together to
// obtain the new raw password and then prints it.
// •	Cut {index} {length}
// o	Gets the substring with the given length starting from the given index from the password and removes 
// its first occurrence of it, then prints the password on the console.
// o	The given index and length will always be valid.
// •	Substitute {substring} {substitute}
// o	If the raw password contains the given substring, replaces all of its 
// occurrences with the substitute text given and prints the result.
// o	If it doesn’t, prints "Nothing to replace!"
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.



function passwordReset(input) {



}



function TakeOdd(password) {
    let newPass = ""

    for (let i = 1; i <= password.length; i += 2) {
        newPass += password[i];
    }

    console.log(newPass);
}

function Cut(password, index, length) {
    let firstPart = password.substring(0, index);
    let secondPart = password.substring(index, index+length);
    let thirdPart = password.substring(index+length);

    let result = firstPart + thirdPart;

    console.log(result);
}

function Substitute(password, toReplace, char){

    
    //console.log(password.replaceAll(toReplace, char));

}

Substitute(`icecream::hot::mer`, `::`, `-`);



passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);