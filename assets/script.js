var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "]", "[", ";", ":", "<", ">", ",", ".", "?"]

var userdataarray = [];
var validSpecial = false;
var validNumber = false;
var validLength = false;
var validLower = false;
var validUpper = false;


//For Input - Materialize
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });


  // Reset Function

function myreset(){
    var userdataarray = [];
    var validSpecial = false;
    var validNumber = false;
    var validLength = false;
    var validLower = false;
    var validUpper = false;
    document.getElementById("userentry").innerText = "";
}

//First Part of the Program
function checkForPassword() {
    console.log("Check pass");
    var userdata = document.querySelector("#userentry").value;
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

// Copy to clipboard
function copyToClick(){
    var passwordgen = document.getElementById("output2");
    console.log("pass",passwordgen)
    passwordgen.focus()
    passwordgen.select();
    document.execCommand("copy");
    alert(`Your password ${passwordgen.value} was copied`);
}

// Second Part of the Program
function generatePassword(){
    var checkElements = document.getElementsByClassName('inputrules'),checked=true;
    var passwordLength = document.getElementById('lengthinput').value;
    var passwordGenerated = [];
    var i =0;
    console.log("CheckboxITEM",checkElements)
    while(i< passwordLength){
        if (checkElements[0].checked && i <passwordLength){
           passwordGenerated.push(generateLowerCase());
           i++
        }
        if( checkElements[1].checked && i <passwordLength){
           passwordGenerated.push(generateUpperCase());
            i++;
        }
        if(checkElements[2].checked  && i <passwordLength){
           passwordGenerated.push(generateSpecial());
            i++
        }
        if(checkElements[3].checked  && i <passwordLength){
            passwordGenerated.push(generateNumbers());
            i++
        }
    }
    console.log(passwordGenerated,"pwsd")
    // document.getElementById("output2").innerText = passwordGenerated.toString();
    document.getElementById("mygeneratedpassword").innerText = passwordGenerated.slice(0).join("");
    var copypassword = document.getElementById("copycb");
    copypassword.removeAttribute("disabled");
    copypassword.addEventListener("click",copyToClick);
}


function generateNumbers(){
    let rndNumber = Math.floor(Math.random()*9);
    console.log("Number -",rndNumber);
    return rndNumber;
}

function generateUpperCase(){
    let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let rndUpper = Math.floor(Math.random()*25);
    console.log("Upper",rndUpper,upperCase[rndUpper]);
    return upperCase[rndUpper];
}

function generateLowerCase(){
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let rndLower = Math.floor(Math.random()*25);
    console.log("Lower",rndLower,lowerCase[rndLower]);
    return lowerCase[rndLower];
}

function generateSpecial(){
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "]", "[", ";", ":", "<", ">", ",", ".", "?"];
    let rndSpecial = Math.floor(Math.random()*(specialCharacters.length));
    console.log("special",rndSpecial,specialCharacters[rndSpecial]);
    return specialCharacters[rndSpecial];
}