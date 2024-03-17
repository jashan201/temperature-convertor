'use strict';

const body = document.body;
const jashan = document.getElementById('jashan');
const givenNumber = document.querySelector('.number');
const convert = document.querySelector('.convert');
const output = document.querySelector('.output p');
const radioButtons = document.getElementById('input[name="unit of temperature"]');


jashan.addEventListener('click', function() {
    body.classList.toggle('changes');
    output.classList.toggle('changes');
    jashan.classList.toggle('changes');

this.innerText = body.classList.contains('changes') ?
'light mode' : 'dark mode';
});


function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const toFahrenheitRadio = document.getElementById('toFahrenheit');
    const selectedUnit = toFahrenheitRadio.checked ? toFahrenheitRadio.value : 'Celsius';
    
    let convertedTemperature;

    if (temperatureInput.trim() === '' || isNaN(parseFloat(temperatureInput))) {
        document.getElementById('result').innerText = 'enter a valid value.';
        return;
      }

    if (selectedUnit === 'Celsius') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
    } else {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    }

    document.getElementById('result').innerText = ` ${convertedTemperature.toFixed(2)} ${selectedUnit}`;
}