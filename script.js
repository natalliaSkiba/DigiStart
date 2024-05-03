let quantitySurfer = 0;
let quantityMargarita = 0;
let quantityPunch = 0;
let quantityCoco = 0;

const priceSufer = 10;
const priceMargarita = 15;
const pricePunch = 20;
const priceCoco = 25;

const totalQuantity = quantitySurfer + quantityMargarita + quantityPunch + quantityCoco;

const totalPriceSurfer = quantitySurfer * priceSufer;
const totalPriceMargarita = quantityMargarita * priceMargarita;
const totalPricePunch = quantityPunch * pricePunch;
const totalPriceCoco = quantityCoco * priceCoco;

const totalCoast = totalPriceSurfer + totalPriceMargarita + totalPricePunch + totalPriceCoco;


//utilisation API OpenWether

function convertToFahrenheit(temperature) {
    return (temperature - 32) * 5 / 9;
}

$(document).ready(function() {

var settings = {
"url": "https://api.openweathermap.org/data/2.5/weather?lat=48.8589&lon=2.2770&units=imperial&appid=4d014eb051e3fc3749a99a8b701abf19",
   "method": "GET",
   "timeout": 0,
   };

   $.ajax(settings).done(function (response) {
   console.log(response);

// Convertir la température min zt max de Fahrenheit en Celsius
var temperatureMinFahrenheit = response.main.temp_min;
var temperatureMaxFahrenheit = response.main.temp_max;
var content_wind = response.wind.speed;

var temperatureMinCelsius = convertToFahrenheit(temperatureMinFahrenheit);
var temperatureMaxCelsius = convertToFahrenheit(temperatureMaxFahrenheit);

//Afficher les températures converties sur la page
$("#temp_min").append(temperatureMinCelsius.toFixed(2) + "°C");
$("#temp_max").append(temperatureMaxCelsius.toFixed(2) + "°C");
$("#windSpeed").append(content_wind);  
});
});
