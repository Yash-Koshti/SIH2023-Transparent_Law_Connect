var emailError = document.getElementById("email-error");

function validateEmail() {
    var email = document.getElementById("contactemail").value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        emailError.innerHTML = '<i class="fas fa-times-circle"> Email Invalid!';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle text-success"></i>'
    return true;
}

function validateForm() {
    if (!validateEmail()) {
        return false;
    }
    return true;

}