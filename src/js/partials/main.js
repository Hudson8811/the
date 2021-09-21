//= paymentMethod.js
//= paymentValidate.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');

  if (document.querySelector('.payment-method')) {
    paymentMethod(form);
    paymentValidate(form);
  }
});
