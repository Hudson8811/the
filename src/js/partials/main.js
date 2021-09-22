//= payment/paymentMethod.js
//= payment/paymentValidate.js

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.payment-form')) {
    const form = document.querySelector('form');

    paymentMethod(form);
    paymentValidate(form);
  }
});
