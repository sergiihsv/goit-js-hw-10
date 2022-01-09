import './css/styles.css';

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

export const countriesMarkup = function (markup) {
  document.querySelector('.country-list').innerHTML = markup;
};
