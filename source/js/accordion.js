const accordion = document.querySelectorAll('.faq__tab');

accordion.forEach((accordionItem) => {
  const control = accordionItem.querySelector('.faq__control');

  control.addEventListener('click', () => {
    if (control.classList.contains('faq__control--plus')) {
      control.classList.remove('faq__control--plus');
    } else {
      control.classList.add('faq__control--plus');
    }
  });
})
