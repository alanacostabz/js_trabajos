import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// fetch animals from api
function fetchAnimals(e) {
  e.preventDefault();

  // Get user input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // fetch pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=EgYHbeceBrApljH3MxTGZBd2GizgomOOouv6vH9K&animal=${animal}&location=${zip}&callback=callback`, { jsonpCallbackFunction: 'callback' })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}

// JSONP Callback
function callback(data) {
  console.log(data);
}
