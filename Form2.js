
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

    // alert("hello " + username + " " + password)

    if(usernameValid == 'rohit'){
        if(passwordValid == 'R1234'){
            alert(`User ${usernameValid} !!! You are successfully Login`)
        }else{
            alert(`User ${usernameValid} !!!  Login Failed    Your Password are Incorrect`)
        }
    }else{
        alert("User Not Found")
    }
}

function validUser(){
    console.log(document.getElementById("username").value)
    var u_length = username.value.length;
    console.log(u_length)

    if(u_length <= 3){
        userSpan.innerText = 'User Not valid'
    }
    return true;

    // const bg = () => {
    //     document.getElementsByClassName('inUserDiv').style = "red"
    // }

    // bg();
}


function validPass(){
    var p_length = document.getElementById('password').value.length;

    console.log(p_length)

    if(p_length <= 3){
        passSpan.innerText = 'Password Not valid'
    }
    return true;
}






