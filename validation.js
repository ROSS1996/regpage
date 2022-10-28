firstName = document.getElementById('firstName')
lastName = document.getElementById('lastName')
email = document.getElementById('email')
phone = document.getElementById('phone')
password = document.getElementById('password')
confirmation = document.getElementById('confirmation')

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

email.addEventListener("focusout", function () {
    if(!email.value.match(emailFormat))
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