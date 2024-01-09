let soloNumeros = /^[0-9]+$/;
let soloLetras = /^[a-zA-Z]+$/;

let loginForm = document.querySelector('#paymentform');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let error = false;

