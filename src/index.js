import './css/styles.css';
import fetchCountries from './fetchCountries';
/* import { fetchCountries, countriesMarkup, countryMarkup } from './js/fetchCountries'; */
import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', debounce(showCountries, DEBOUNCE_DELAY));

fetchCountries();

function markUp() {}

function showCountries() {
  if (searchInput.value.trim() === '') {
    countriesMarkup(' ');
    countryMarkup(' ');
    return;
  }
  fetchCountries(searchInput.value.trim());
}
