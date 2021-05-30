function validate() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
    }

    if (email == "") {
        form.classList.remove('valid')
        form.classList.remove('invalid')
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const formPassW = document.getElementById('formPassW');

    if (password.length >= 6) {
        formPassW.classList.add('valid')
        formPassW.classList.remove('invalid')
    } else {
        formPassW.classList.add('invalid')
        formPassW.classList.remove('valid')
    }

    if (password == "") {
        formPassW.classList.remove('valid')
        formPassW.classList.remove('invalid')
    }
}