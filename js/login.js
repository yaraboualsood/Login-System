var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var loginBtn = document.getElementById('loginBtn')

var users = []
users = JSON.parse(localStorage.getItem("user"))



function login() {
    if (emailInput.value == '' || passwordInput.value == '') {
        document.getElementById('message').innerHTML = `<p class="text-center text-danger fs-5">All inputs are required!</p>`
    }
    else {
        if (checkUser() == true) {
            location.href = 'home.html'
        }
        else {
            document.getElementById('message').innerHTML = `<p class="text-center text-danger fs-5">Email or password not correct!</p>`
        }
    }


}

function checkUser() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == emailInput.value && users[i].password == passwordInput.value) {
            localStorage.setItem("username" , users[i].name)
            return true

        }

    }
}

