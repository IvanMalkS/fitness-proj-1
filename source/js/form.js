const form = document.querySelector('.feedback__form');

const initFormValidation = () => {
  if (form) {
    form.addEventListener('submit', function(event) {
      const nameInput = event.target.querySelector('.input__control[name="name"]');
      const phoneInput = event.target.querySelector('.input__control[name="phone"]');
      const nameError = document.getElementById('name-error');
      const phoneError = document.getElementById('phone-error');

      if (!phoneInput || !nameInput) {
        return;
      }

      let isValid = true;

      nameInput.classList.remove('input__control--invalid');
      phoneInput.classList.remove('input__control--invalid');
      nameError.classList.remove('input__error-message--visible');
      phoneError.classList.remove('input__error-message--visible');

      if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(nameInput.value)) {
        isValid = false;
        nameInput.classList.add('input__control--invalid');
        nameError.classList.add('input__error-message--visible');
      }

      if (!/^8[0-9]{10}$/.test(phoneInput.value)) {
        isValid = false;
        phoneInput.classList.add('input__control--invalid');
        phoneError.classList.add('input__error-message--visible');
      }

      if (!isValid) {
        event.preventDefault();
      }
    });
  }
}

export default initFormValidation;
