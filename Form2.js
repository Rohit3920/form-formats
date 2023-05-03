alert("Username = Rohit && Password = Rohit1234")

function onSubmit(e) {
    e.preventDefault();
}                                                                               //login form for subiting to stop default page refresh
function saveData(event) {
    event.preventDefault();
    passEqual()
}                                                                               //signup form for subiting to stop default page refresh

//all hmtl element are convert variable
var username = document.getElementById('username')
var password = document.getElementById('password')
var userSpan = document.getElementById('userSpan')
var passSpan = document.getElementById('passSpan')
var LoginLink = document.getElementById('navLogLink')
var signupLink = document.getElementById('navSignLink')
var log = document.getElementById('login-form')
var sign = document.getElementById('signup-form')

var checkPass = document.getElementById('pass1')
var checkRePass = document.getElementById('pass2')
var pass1Span = document.getElementById('pass1Span')
var pass2Span = document.getElementById('pass2Span')

function validation() {
    var usernameValid = username.value;
    var passwordValid = password.value;
    if (usernameValid == 'Rohit') {
        if (passwordValid == 'Rohit1234') {
            alert(`User ${usernameValid} !!! You are successfully Login`)
        } else {
            alert(`User ${usernameValid} !!!  Login Failed    Your Password are Incorrect`)
        }
    } else {
        alert("User Not Found")
    }
}                                                                           //login logic use if-else condition

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
}                                                                              //user.length more than 3 then user valid otherwise user not valid
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
}                                                                   //password.length more than 3 then password valid otherwise password not valid

function closeForm() {
    sign.className = 'hiddenCls';
    log.className = 'hiddenCls'
    LoginLink.className = ""
    signupLink.className = ""
}                                                                                //this function use for close form and focus effect in nav link
function hideShowLog() {
    sign.className = 'hiddenCls';
    log.className = ''
    activeCls()
}                                                                                //this function use close login form
function hideShowSign() {
    sign.className = '';
    log.className = 'hiddenCls'
    activeCls()
}                                                                                //this function use close sighup form
function activeCls() {
    console.log(LoginLink.className)
    if (log.className == "") {
        LoginLink.className = "active"
        signupLink.className = ""
    } else {
        LoginLink.className = ""
        signupLink.className = "active"
    }                                                                               // use in active form to focus navBar forms-links
}
function SignupData() {
    var set1 = checkPass.value.length;
    var set2 = checkRePass.value.length;
    const check = () => {
        pass2Span.innerText = "";
        checkRePass.style.borderColor = 'black'
        const valid = () => {
            checkPass.style.borderColor = 'black'
            checkRePass.style.borderColor = 'black'
            const equal = () => {
                alert("password are Equal")
                checkPass.style.borderColor = 'green'
                checkRePass.style.borderColor = 'green'
            }
            const notEqual = () => {
                alert("password not equal")
                checkPass.style.borderColor = 'red'
                checkRePass.style.borderColor = 'red'
            }
            checkPass.value == checkRePass.value ? equal() : notEqual();
        }
        var text = () => {
            pass1Span.innerText = "password Not valid";
            pass2Span.innerText = "re-password Not valid";
            checkPass.style.borderColor = 'red'
            checkRePass.style.borderColor = 'red'
        }
        set1 <= 8 && set2 <= 8 ? text() : valid();
    }
    const set2Fun = () => {
        pass1Span.innerText = "";
        checkPass.style.borderColor = 'black'
        checkRePass.style.borderColor = 'red'
        set2 == 0 ? pass2Span.innerText = " please fill pass2" : check();
    }
    const set1Fun = () => {
        pass1Span.innerText = "please fill pass1"
        checkPass.style.borderColor = 'red'
    }
    set1 == 0 ? set1Fun() : set2Fun();
}                                                                                           // this logic for password handle or check equality 

