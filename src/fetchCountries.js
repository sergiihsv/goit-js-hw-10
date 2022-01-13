import Notiflix from 'notiflix';

export default function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`,
  )
    .then(response => {
      return response.json();
    })
    .then(name => {
      console.log(name);
    })
    .catch(error => {
      console.log(error);
    });
}
