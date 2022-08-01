//Challenge Area

let convertFahrenheit = function(fahrenheit){
    return{
        Fahrenheit : fahrenheit,
        Kelvin : (fahrenheit + 459.67) * (5/9),
        Celsius : (fahrenheit - 32) * (5/9)
    }


}

let temp1 = convertFahrenheit(200)
console.log(temp1)