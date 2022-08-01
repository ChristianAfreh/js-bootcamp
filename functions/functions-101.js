// function - input(argument),code,output(return)

//Challenge Area

let convertFahrenheitToCelsius = function(temp){
    let result = (temp - 32) * 5/9
    return result
}

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);
let temp3 = convertFahrenheitToCelsius(100);

console.log(temp1)
console.log(temp2)
console.log(temp3)