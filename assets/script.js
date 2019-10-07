var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "]", "[", ";", ":", "<", ">", ",", ".", "?"]

var userdataarray = [];
var validSpecial = false;
var validNumber = false;
var validLength = false;
var validLower = false;
var validUpper = false;

function checkForPassword() {
    console.log("Check pass");
    var userdata = document.getElementById("userentry").value;
    for (let i = 0; i < userdata.length; i++) {
        userdataarray.push(userdata[i])
    }
    if (userdata.length >= 8 && userdata.length <= 255) {
        validLength = true;
        console.log("Valid Length")
    }
    for (let i = 0; i < specialCharacters.length; i++) {
        if (userdataarray.indexOf(specialCharacters[i]) > -1) {
            validSpecial = true;
            console.log("Valid Special Characters");
        }
    }
    for (let i = 0; i < userdata.length; i++) {
        switch (true) {
            case userdata.charCodeAt(i) >= 65 && userdata.charCodeAt(i) <= 90:
                validUpper = true;
                break;
            case userdata.charCodeAt(i) >= 97 && userdata.charCodeAt(i) <= 122:
                validLower = true;
                break;
            case userdata.charCodeAt(i) >= 48 && userdata.charCodeAt(i) <= 57:
                validNumber = true;
        }
    }

    if (validLength && validLower && validUpper && validNumber && validSpecial) {

        document.getElementById("output").insertAdjacentText('beforebegin', 'Valid Password entered. Hurray!!!');
        console.log("Perfect", validLength, validLower, validUpper, validNumber, validSpecial);
    }
    else
     {
            document.getElementById("output").insertAdjacentText('beforebegin', 'Oops! Password entered does not match criteria.');
            console.log("Perfect", validLength, validLower, validUpper, validNumber, validSpecial);
     }

    if (validLower) {
        document.getElementsByClassName("rules")[0].style.color = "green";
    }
    else {
        document.getElementsByClassName("rules")[0].style.color = "red";
    }

    if (validUpper) {
        document.getElementsByClassName("rules")[1].style.color = "green";
    }
    else {
        document.getElementsByClassName("rules")[1].style.color = "red";
    }

    if (validSpecial) {
        document.getElementsByClassName("rules")[3].style.color = "green";
    }
    else {
        document.getElementsByClassName("rules")[3].style.color = "red";
    }

    if (validNumber) {
        document.getElementsByClassName("rules")[2].style.color = "green";
    }
    else {
        document.getElementsByClassName("rules")[2].style.color = "red";
    }

    if (validLength) {
        document.getElementsByClassName("rules")[4].style.color = "green";
    }
    else {

        document.getElementsByClassName("rules")[4].style.color = "red";
    }



}


