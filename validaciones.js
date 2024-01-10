let soloNumeros = /^[0-9]+$/;
let soloLetras = /^[a-zA-Z]+$/;

let loginForm = document.querySelector('.payform');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let error = false;

    let cardNumber = document.querySelector('#cardNumber');
    let cardNumberFB = document.querySelector('#cardNumber-feedback');

    if (cardNumber.value == "") {
        error = true;
        cardNumber.classList.add('is-invalid')
        cardNumberFB.innerHTML = "Campo es obligatorio"
        cardNumber.focus();
    } else if (!soloNumeros.test(cardNumber.value)) {
        error = true;
        cardNumber.classList.add('is-invalid')
        cardNumberFB.innerHTML = "Solo se necesitan numeros"
        cardNumber.focus();
    }

    let cvcnumber = document.querySelector('#cvcnumber');
    let cvcnumberFB = document.querySelector('#cvcnumber-feedback');

    if (cvcnumber.value == "") {
        error = true;
        cvcnumber.classList.add('is-invalid')
        cvcnumberFB.innerHTML = "Campo es obligatorio"
        cvcnumber.focus();
    } else if (!soloNumeros.test(cvcnumber.value)) {
        error = true;
        cvcnumber.classList.add('is-invalid')
        cvcnumberFB.innerHTML = "Solo se necesitan numeros"
        cvcnumber.focus();
    } else if (cvcnumber.value.length != 3) {
        error = true;
        cvcnumber.classList.add('is-invalid')
        cvcnumberFB.innerHTML = "Se necesitan 3 numeros"
        cvcnumber.focus();
    }

    let amountnumber = document.querySelector('#amountnumber');
    let amountnumberFB = document.querySelector('#amountnumber-feedback');

    if (amountnumber.value == "") {
        error = true;
        amountnumber.classList.add('is-invalid')
        amountnumberFB.innerHTML = "Campo es obligatorio"
        amountnumber.focus();
    } else if (!soloNumeros.test(amountnumber.value)) {
        error = true;
        amountnumber.classList.add('is-invalid')
        amountnumberFB.innerHTML = "Solo se necesitan numeros"
        amountnumber.focus();
    }


    let firstname = document.querySelector('#firstname');
    let firstnameFB = document.querySelector('#firstname-feedback');

    if (firstname.value == "") {
        error = true;
        firstname.classList.add('is-invalid')
        firstnameFB.innerHTML = "Campo es obligatorio"
        firstname.focus();
    } else if (!soloLetras.test(firstname.value)) {
        error = true;
        firstname.classList.add('is-invalid')
        firstnameFB.innerHTML = "Solo se necesitan letras"
        firstname.focus();
    }

    let lastname = document.querySelector('#lastname');
    let lastnameFB = document.querySelector('#lastname-feedback');

    if (lastname.value == "") {
        error = true;
        lastname.classList.add('is-invalid')
        lastnameFB.innerHTML = "Campo es obligatorio"
        lastname.focus();
    } else if (!soloLetras.test(lastname.value)) {
        error = true;
        lastname.classList.add('is-invalid')
        lastnameFB.innerHTML = "Solo se necesitan letras"
        lastname.focus();
    }

    let cityname = document.querySelector('#cityname');
    let citynameFB = document.querySelector('#cityname-feedback');

    if (cityname.value == "") {
        error = true;
        cityname.classList.add('is-invalid')
        citynameFB.innerHTML = "Campo es obligatorio"
        cityname.focus();
    } else if (!soloLetras.test(cityname.value)) {
        error = true;
        cityname.classList.add('is-invalid')
        citynameFB.innerHTML = "Solo se necesitan letras"
        cityname.focus();
    }

    let state = document.querySelector('#state');
    let stateFB = document.querySelector('#state-feedback');

    if (state.value == "") {
        error = true;
        state.classList.add('is-invalid')
        stateFB.innerHTML = "Campo es obligatorio"
        cityname.focus();
    }

    let postalcode = document.querySelector('#postalcode');
    let postalcodeFB = document.querySelector('#postalcode-feedback');

    if (postalcode.value == "") {
        error = true;
        postalcode.classList.add('is-invalid')
        postalcodeFB.innerHTML = "Campo es obligatorio"
        postalcode.focus();
    } else if (!soloNumeros.test(postalcode.value)) {
        error = true;
        postalcode.classList.add('is-invalid')
        postalcodeFB.innerHTML = "Solo se necesitan numeros"
        postalcode.focus();
    }

    let message = document.querySelector('#message');
    let messageFB = document.querySelector('#message-feedback');

    if (message.value == "") {
        error = true;
        message.classList.add('is-invalid')
        messageFB.innerHTML = "Campo es obligatorio"
        message.focus();

    }

})