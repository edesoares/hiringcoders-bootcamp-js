// Celsius pra Kelvin
function celsiusToKelvin(temp){
    return temp + 273.15;
}

// Kelvin pra Celsius
function kelvinToCelsius(temp){
    return temp - 273.15;
}

// Celsius pra Fahrenheit
function celsiusToFahrenheit(temp){
    return temp * 1.8 + 32;
}

// Fahrenheit pra Celsius
function fahrenheitToCelsius(temp){
    return ((temp - 32) * 5) / 9;
}

// Fahrenheit pra Kelvin
function fahrenheitToKelvin(temp){
    return fahrenheitToCelsius(temp) + 273.15;
}

// Kelvin pra Fahrenheit
function kelvinToFahrenheit(temp){
    return celsiusToFahrenheit(kelvinToCelsius(temp));
}


let temperatura = 50;
console.log(temperatura + "ºC = " + celsiusToKelvin(temperatura) + "K");
temperatura = celsiusToKelvin(temperatura)
console.log(temperatura + "K = " + kelvinToCelsius(temperatura) + "ºC");
console.log(temperatura + "K = " + kelvinToFahrenheit(temperatura)+ "ºF");
temperatura = kelvinToFahrenheit(temperatura);
console.log(temperatura + "ºF = " + fahrenheitToKelvin(temperatura) + "K");
console.log(temperatura + "ºF = " + fahrenheitToCelsius(temperatura) + "ºC");
temperatura = fahrenheitToCelsius(temperatura);
console.log(temperatura + "ºC = " + celsiusToFahrenheit(temperatura) + "ºF");