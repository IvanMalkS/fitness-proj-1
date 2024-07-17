const accordion = document.querySelectorAll('.faq__tab');

accordion.forEach((accordionItem) => {
  const control = accordionItem.querySelector('.faq__control');

  control.addEventListener('click', () => {
    if (control.classList.contains('')) {
      control.classList.remove('');
    } else {
      control.classList.add('');
    }
  });
});
