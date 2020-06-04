const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getName(input)} is required`);
        }
    }); }
    
function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getName(input)} must be atleast ${min} characters.`);
    }
    else if (input.value.length > max) {
        showError(input, `${getName(input)} must be less than ${max} characters.`);
    }
    else {
        showSuccess(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(input.value.trim())) {
        showError(input,'Email is not valid');
    }
    else {
        showSuccess(input);
    }
    }
function checkPasswordMatch(input1,input2) {
    if (input1.value === input2.value) {
        showSuccess(input2)
    }
    else {
        showError(input2,'Passwords do not match')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();    
    checkLength(username, 4, 15);
    checkLength(password, 6, 18);
    checkEmail(email);
    checkPasswordMatch(password,password2);
    checkRequired([username,email,password,password2]);
})