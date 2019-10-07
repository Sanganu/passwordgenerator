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

    switch (true) {
        case validLength && validLower && validUpper && validNumber && validSpecial:
            document.getElementById("output").insertAdjacentText('beforebegin', 'Valid Password entered. Hurray!!!');
            console.log("Perfect", validLength, validLower, validUpper, validNumber, validSpecial);

        case !(validLength && validLower && validUpper && validNumber && validSpecial):
            document.getElementById("output").insertAdjacentText('beforebegin', 'InValid Password entered.Oops!!!');
            console.log("Perfect", validLength, validLower, validUpper, validNumber, validSpecial);
        case !validLength:
            document.getElementsByClassName("rules")[4].style.color = "red";
        case !validLower:
            document.getElementsByClassName("rules")[0].style.color = "red";
        case !validUpper:
            document.getElementsByClassName("rules")[1].style.color = "red";
        case !validSpecial:
            document.getElementsByClassName("rules")[3].style.color = "red";
        case !validNumber:
            document.getElementsByClassName("rules")[2].style.color = "red";
        case validLength:
            document.getElementsByClassName("rules")[4].style.color = "green";
        case validLower:
            document.getElementsByClassName("rules")[0].style.color = "green";
        case validUpper:
            document.getElementsByClassName("rules")[1].style.color = "green";
        case validNumber:
            document.getElementsByClassName("rules")[2].style.color = "green";
        case validSpecial:
            document.getElementsByClassName("rules")[3].style.color = "green";


    }

} 
