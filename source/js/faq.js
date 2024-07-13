const initTabsSwitch = () => {
  const tabs = document.querySelectorAll('.faq__tab-button');
  const accordions = document.querySelectorAll('.faq__accordion');

  if (!tabs || !accordions) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('faq__tab-button--current'))
      tab.classList.add('faq__tab-button--current')

      const tabAccordionId = tab.getAttribute('data-tab');
      accordions.forEach((index) => {
        if (index.id === tabAccordionId) {
          index.style.display = 'block';
        } else {
          index.style.display = 'none';
        }
      });
    })
  })
}

const initAccordion = () => {
  const accordionItems = document.querySelectorAll('.faq__item');

  if (!accordionItems) {
    return;
  }

  accordionItems.forEach((accordionItem) => {
    const control = accordionItem.querySelector('.faq__control');
    const content = accordionItem.querySelector('.faq__text');

    control.addEventListener('click', () => {
      if (control.classList.contains('faq__control--plus')) {
        control.classList.remove('faq__control--plus');
        content.classList.remove('faq__text--hidden');
      } else {
        control.classList.add('faq__control--plus');
        content.classList.add('faq__text--hidden');
      }
    });
  })
}

export { initTabsSwitch, initAccordion };
