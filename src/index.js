import './css/styles.css';
/* import { fetchCountries, countriesMarkup, countryMarkup } from './js/fetchCountries'; */
import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

/* export const countriesMarkup = function (markup) {
  document.querySelector('.country-list').innerHTML = markup;
};

let name = '';
 */

function fetchCountries(name) {
  fetch(
    'https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages',
  )
    .then(responce => responce.json())
    .then(console.log);
}

fetchCountries(usa);
