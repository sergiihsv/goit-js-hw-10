import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries, countriesMarkup, countryMarkup } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');

searchInput.addEventListener('input', debounce(showCountries, DEBOUNCE_DELAY));

function showCountries() {
  if (searchInput.value.trim() === '') {
    countriesMarkup(' ');
    countryMarkup(' ');
    return;
  }

  fetchCountries(searchInput.value.trim());
}
