const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// onclick open sign up page
function register() {
    window.open("register.html")
}
// onclick open login page
function login() {
    window.open("login.html")
}

// onclick of sign up button check form
function signup() {
    var email = document.getElementById('userEmail').val;
    var psw = document.getElementById('userpsw').val;
    var name = document.getElementById('userName').val;
    var year = document.getElementById('year').val;
    var month = document.getElementById('month').val;
    var date = document.getElementById('date').val;
    var gender = document.getElementsByName('gender').val;
    if (email == undefined) {
        document.getElementById('userEmailSpan').innerHTML = " You need to enter your email";
        document.getElementById('userEmailSpan').style.color = "red";
        document.getElementById('userEmailSpan').style.textDecoration = "underline";
    }

    if (psw == undefined) {
        document.getElementById('userPswSpan').innerHTML = " You need to enter your password";
        document.getElementById('userPswSpan').style.color = "red";
        document.getElementById('userPswSpan').style.textDecoration = "underline";
    }

    if (name == undefined) {
        document.getElementById('userNameSpan').innerHTML = " You need to enter your profile name";
        document.getElementById('userNameSpan').style.color = "red";
        document.getElementById('userNameSpan').style.textDecoration = "underline";
    }

    if (year == undefined) {
        document.getElementById('userYearSpan').innerHTML = " You need to enter your birth year";
        document.getElementById('userYearSpan').style.color = "red";
        document.getElementById('userYearSpan').style.textDecoration = "underline";
    }

    if (month == undefined) {
        document.getElementById('userNameSpan').innerHTML = " You need to enter your profile name";
        document.getElementById('userNameSpan').style.color = "red";
        document.getElementById('userNameSpan').style.textDecoration = "underline";
    }

    if (date == undefined) {
        document.getElementById('userDateSpan').innerHTML = " You need to enter your date of birth";
        document.getElementById('userDateSpan').style.color = "red";
        document.getElementById('userDateSpan').style.textDecoration = "underline";
    }

    if (gender == undefined) {
        document.getElementById('userGenderSpan').innerHTML = " You need to enter your gender";
        document.getElementById('userGenderSpan').style.color = "red";
        document.getElementById('userGenderSpan').style.textDecoration = "underline";
    }
}