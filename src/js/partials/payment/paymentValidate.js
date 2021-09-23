function paymentValidate(form) {
  const email = form.querySelector('input[data-type="email"]'),
    payment = form.querySelector('.payment-method'),
    paymentMethods = form.querySelectorAll('.payment-method__item input');

  let error = false;

  form.addEventListener('submit', e => {
    let noMethod = true;

    paymentMethods.forEach(item => {
      if (item.checked) {
        noMethod = false;
      }
    });

    error = noMethod;

    if (error) {
      e.preventDefault();
      payment.classList.add('error');

      setTimeout(() => {
        payment.classList.remove('error');
      }, 7000);
    } else {
      error = checkEmail(email);

      if (error) {
        e.preventDefault();
        email.closest('.input').classList.add('error');

        setTimeout(() => {
          email.closest('.input').classList.remove('error');
        }, 7000);
      }
    }
  });

  form.addEventListener('change', e => {
    if (e.target.name) {
      payment.classList.remove('error');
    }
  });

  email.addEventListener('blur', () => {
    error = checkEmail(email);

    if (error) {
      email.closest('.input').classList.add('error');

      setTimeout(() => {
        email.closest('.input').classList.remove('error');
      }, 7000);
    } else {
      email.closest('.input').classList.remove('error');
    }
  });

  function checkEmail(email) {
    const caption = email.closest('.input').querySelector('.error-caption__text');

    if (email.value.trim()) {
      const value = email.value.trim();

      if (!/^\w+@\w+\.\w{2,}$/.test(value)) {
        caption.textContent = 'Некорректный email';
        return true;
      } else {
        return false;
      }
    } else {
      caption.textContent = 'Введи email';
      return true;
    }
  }

  function checkEmailOnInput(item) {
    item.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^A-Z1-9@\-_.]/gi, '');
    });
  }

  checkEmailOnInput(email);
}
