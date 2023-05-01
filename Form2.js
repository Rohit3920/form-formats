
function onSubmit(e) {
    e.preventDefault();
}



function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // alert("hello " + username + " " + password)

    if(username == 'rohit'){
        if(password == 'R1234'){
            alert(`User ${username}!!! You are successfully Login`)
        }else{
            alert(`User ${username}!!!  Login Failed`)
        }
    }else{
        alert("User Not Found")
    }
}




