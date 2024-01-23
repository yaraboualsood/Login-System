var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')

var users = []



if (localStorage.getItem("user") != null) {
    users = JSON.parse(localStorage.getItem("user"))
} else {
    users = []
}


function signUp() {
    if (nameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
        document.getElementById('message').innerHTML = `<p class="text-center text-danger fs-5">All inputs are required!</p>`
    }

    else {
        if (validate() == true) {
            
            if (checkEmail() == true) {
                document.getElementById('message').innerHTML = `<p class="text-center text-danger fs-5">Email Already Exists!</p>`
            }
            else {
                var userobj = {
                    name: nameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value,
                }
                users.push(userobj);
                location.href = 'login.html'
                localStorage.setItem("user", JSON.stringify(users))
            }
        }

        else{
            document.getElementById('message').innerHTML = `<p class="text-center text-danger fs-5">
            - email must be valid 
            - password must contain 8 or more characters!</p>`
        }


    }


}

function checkEmail() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == emailInput.value)
            return true
    }
}



function validate() {
    var emailRegex = /^[\w]+[@][\w]+(\.com)$/
    var passRegex = /^.{8,}$/
    if (emailRegex.test(emailInput.value) && passRegex.test(passRegex.value) == true) {
        return true
    }
    else {
        return false
    }
}
