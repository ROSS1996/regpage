firstName = document.getElementById('firstName')
lastName = document.getElementById('lastName')
email = document.getElementById('email')
phone = document.getElementById('phone')
password = document.getElementById('password')
confirmation = document.getElementById('confirmation')

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

email.addEventListener("focusout", function () {
    if (email.value == '') { }
    else if(!email.value.match(emailFormat))
    {
        email.classList.add("error");
        invalidEmail = document.getElementById('invalidEmail')
        if (invalidEmail == null) {
            const errorEmail = document.createElement("p");
            const errorEmailTxt = document.createTextNode("Error: Invalid Email");
            errorEmail.appendChild(errorEmailTxt);
            errorEmail.id = 'invalidEmail'
            errorEmail.style.cssText = 'font-size: 0.7rem; color: red'
            email.parentNode.insertBefore(errorEmail, email.nextSibling)
        }
    }
    else
    {
        email.classList.remove("error");
        invalidEmail = document.getElementById('invalidEmail')
        invalidEmail.remove()
    }
})

phone.addEventListener("focusout", function () {
    if (phone.value == '') { }
    else if(!phone.value.match(phoneFormat))
    {
        phone.classList.add("error");
        invalidPhone = document.getElementById('invalidPhone')
        if (invalidPhone == null) {
            const errorPhone = document.createElement("p");
            const errorPhoneTxt = document.createTextNode("Error: Invalid Phone");
            errorPhone.appendChild(errorPhoneTxt);
            errorPhone.id = 'invalidPhone'
            errorPhone.style.cssText = 'font-size: 0.7rem; color: red'
            phone.parentNode.insertBefore(errorPhone, phone.nextSibling)
        }
    }
    else
    {
        phone.classList.remove("error");
        invalidPhone = document.getElementById('invalidPhone')
        invalidPhone.remove()
    }
})

password.addEventListener("focusin", function () {
    addPassRequirements()
    validatePassword(password.value)
})

password.addEventListener("focusout", function () {
    rmPassRequirements()
    if (password.value == '') { }
    else if (password.length < 8 || !hasUpper(password.value) || !hasLower(password.value) || !hasNumber(password.value)) {
        password.classList.add("error");
    } else {
        password.classList.remove("error");
    }
})

password.addEventListener("input", function () {
    validatePassword(password.value)
})

function addPassRequirements (action) {
    // Requirements Div
    const passwordRequirements = document.createElement("div");
    passwordRequirements.id = 'passwordRequirements'
    passwordRequirements.classList.add("feedbackText");
    // Length requirement
    const passLength = document.createElement("p");
    passLength.id = 'passLength'
    passLength.innerText = 'Must contain at least 8 characters'
    passLength.classList.add("feedbackText");
    // Password has Upper
    const passUpper = document.createElement("p");
    passUpper.id = 'passUpper'
    passUpper.innerText = 'Must contain at least one uppercase letter'
    passUpper.classList.add("feedbackText");
    // Password has Lower
    const passLower = document.createElement("p");
    passLower.id = 'passLower'
    passLower.innerText = 'Must contain at least one lowercase letter'
    passLower.classList.add("feedbackText");
    // Password has Number
    const passNumber = document.createElement("p");
    passNumber.id = 'passNumber'
    passNumber.innerText = 'Must contain at least one number'
    passNumber.classList.add("feedbackText");
    // Populate div
    passwordRequirements.appendChild(passLength);
    passwordRequirements.appendChild(passUpper);
    passwordRequirements.appendChild(passLower);
    passwordRequirements.appendChild(passNumber);
    // Add requirements to DOM
    password.parentNode.insertBefore(passwordRequirements, password.nextSibling)
}

function rmPassRequirements (action) {
    feedbackText = document.getElementsByClassName('feedbackText')
    for (const element of feedbackText) {
        element.remove()
    }
}

function validatePassword (pass) {
    if (pass.length < 8) {
        document.getElementById("passLength").style.color = "rgb(255,0,0)";
    } else {
        document.getElementById("passLength").style.color = "rgb(22,105,3)";
    }
    if (!hasUpper(pass) || pass == '') {
        document.getElementById("passUpper").style.color = "rgb(255,0,0)";
    } else {
        document.getElementById("passUpper").style.color = "rgb(22,105,3)";
    }
    if (!hasLower(pass) || pass == '') {
        document.getElementById("passLower").style.color = "rgb(255,0,0)";
    } else {
        document.getElementById("passLower").style.color = "rgb(22,105,3)";
    }
    if (!hasNumber(pass) || pass == '') {
        document.getElementById("passNumber").style.color = "rgb(255,0,0)";
    } else {
        document.getElementById("passNumber").style.color = "rgb(22,105,3)";
    }
}

function hasUpper (password) {
    for (const char of password) {
        if (isNaN(char) && char == char.toUpperCase()) {
            return true
        }
    }
}

function hasLower (password) {
    for (const char of password) {
        if (isNaN(char) && char == char.toLowerCase()) {
            return true
        }
    }
}

function hasNumber (password) {
    for (const char of password) {
        if (!isNaN(char)) {
            return true
        }
    }
}

confirmation.addEventListener("focusout", function () {
    if (confirmation.value == '') {
        
    }
    else if(confirmation.value != password.value)
    {
        console.log(`'${confirmation.value}' !== '${password.value}`)
        confirmation.classList.add("error");
        matchPass = document.getElementById('matchPass')
        if (matchPass == null) {
            const unmatchedPass = document.createElement("p");
            const unmatchedText = document.createTextNode("Error: Passwords don't match");
            unmatchedPass.appendChild(unmatchedText);
            unmatchedPass.id = 'matchPass'
            unmatchedPass.style.cssText = 'font-size: 0.7rem; color: red'
            confirmation.parentNode.insertBefore(unmatchedPass, confirmation.nextSibling)
        }
    }
    else
    {
        confirmation.classList.remove("error");
        unmatchedPass = document.getElementById('matchPass')
        unmatchedPass.remove()
    }
})