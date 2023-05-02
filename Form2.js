alert("Username = Rohit && Password = R1234")

function onSubmit(e) {
    e.preventDefault();
}

var username = document.getElementById('username')
var password = document.getElementById('password')
var userSpan = document.getElementById('userSpan')
var passSpan = document.getElementById('passSpan')

function validation() {
    var usernameValid = username.value;
    var passwordValid = password.value;

    if (usernameValid == 'rohit') {
        if (passwordValid == 'R1234') {
            alert(`User ${usernameValid} !!! You are successfully Login`)
        } else {
            alert(`User ${usernameValid} !!!  Login Failed    Your Password are Incorrect`)
        }
    } else {
        alert("User Not Found")
    }
}

function validUser() {
    var u_length = username.value.length;

    if (u_length <= 3) {
        userSpan.innerText = 'User Not valid'
        document.getElementById('inUserDiv').style.borderColor = "red";
    } else {
        userSpan.innerText = ""
        document.getElementById('inUserDiv').style.borderColor = "black";
    }
    return true;
}

function validPass() {
    var p_length = document.getElementById('password').value.length;

    if (p_length <= 3) {
        passSpan.innerText = 'Password Not valid'
        document.getElementById('inPassDiv').style.borderColor = "red";
    } else {
        passSpan.innerText = ''
        document.getElementById('inPassDiv').style.borderColor = "black";
    }

    return true;
}

function hideShowLog() {
    var log = document.getElementById('login-form')
    var sign = document.getElementById('signup-form')

        sign.className= 'hiddenCls';
        log.className = ''
}

function hideShowSign() {
    var log = document.getElementById('login-form')
    var sign = document.getElementById('signup-form')

        sign.className= '';
        log.className = 'hiddenCls'
}

function closeForm(){
    var log = document.getElementById('login-form')
    var sign = document.getElementById('signup-form')

        sign.className= 'hiddenCls';
        log.className = 'hiddenCls'
}
