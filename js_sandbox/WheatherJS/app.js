// Init UI
const ui = new UI();
// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.changeLocation();
// Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',() => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;


    // change location
    weather.changeLocation(city,state);

    // set location in LS
    storage.getLocationData(city,state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});


function getWeather(){ 
weather.getWeather() 
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}