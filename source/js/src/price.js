const VARIATIONS = {
  '1 месяц': [5000, 1700, 2700],
  '6 месяцев': [30000, 10200, 16200],
  '12 месяцев': [60000, 20400, 32400],
};

const tabs = document.querySelectorAll('.price__tab');
const filters = document.querySelectorAll('.price__filter');
const prices = document.querySelectorAll('.subscriptions__prices');

const tabHandler = (event) => {
  const currentTab = event.currentTarget;
  const currentVariation = VARIATIONS[currentTab.textContent];

  prices.forEach((price, index) => {
    const pricesElements = price.querySelectorAll(
      '.subscriptions__price-value',
    );

    pricesElements.forEach((priceElement) => {
      priceElement.textContent = `${currentVariation[index]}`;
      priceElement.setAttribute('content', `${currentVariation[index]}`);
    });
  });

  filters.forEach((filter) => {
    filter.classList.remove('price__filter--current');
  });

  currentTab.closest('.price__filter').classList.add('price__filter--current');
};

const initPriceTabs = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', tabHandler);
  });

  const defaultTab = tabs[0];
  defaultTab.closest('.price__filter').classList.add('price__filter--current');
  tabHandler({ currentTarget: defaultTab });
};

export default initPriceTabs;
