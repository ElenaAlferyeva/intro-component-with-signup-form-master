const firstName  = document.getElementsByName("firstName");
const lastName  = document.getElementsByName("lastName");
const email  = document.getElementsByName("email");
const password  = document.getElementsByName("psw");
const signupButton = document.getElementById('signupbtn');

const inputFields = [firstName[0], lastName[0], email[0], password[0]]
const placeholders = ['First Name', 'Last Name', 'Email Address', 'Password']

signupButton.addEventListener("click", validation);

function validateEmail(someEmail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(someEmail);
  }

function cleanUp() {
    inputFields.forEach( el => {
        el.classList.remove('validation') 
        if (!el.value) {
            el.placeholder = placeholders[inputFields.indexOf(el)]
        }})
        const errorElement = document.getElementsByClassName('error')
        while(errorElement[0]) {
            errorElement[0].parentNode.removeChild(errorElement[0]);
            }
    }

function validation() {
    cleanUp()
    inputFields.forEach( el => {
        if ( !el.value ) {
            el.classList.add('validation')
            const newP = document.createElement("p");
            newP.classList.add('error')
            newP.innerHTML = `${el.placeholder} cannot be empty!`
            el.parentNode.insertBefore(newP,el.nextSibling)
            el.removeAttribute("placeholder");
        }
    })
        if (!validateEmail(email[0].value)) {
            email[0].classList.add('validation')
            const newP = document.createElement("p");
            newP.classList.add('error')
            newP.innerHTML = `Looks like this is not an email`
            email[0].parentNode.insertBefore(newP,email[0].nextSibling)
            email[0].removeAttribute("placeholder");
        } else {
            cleanUp()
            alert('That is it!')
        }
   
}