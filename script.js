var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Need a name';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write A full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Need a phone No';
        return false;
    }
    if (!phone.match(/^\d+$/)) {
        phoneError.innerHTML = 'Only numbers are allowed';
        return false;
    }
    if (phone.length < 11) {
        phoneError.innerHTML = 'Phone No should be at least 11 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

}




function validateMessage(){
    
}