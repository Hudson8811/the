function paymentMethod(form) {
  const methods = document.querySelectorAll('.payment-method__item');

  form.addEventListener('change', e => {
    if (e.target.closest('.payment-method__item')) {
      deselect();

      e.target.closest('.payment-method__item').classList.add('active');
    }
  });

  function deselect() {
    methods.forEach(item => {
      item.classList.remove('active');
    });
  }
}
