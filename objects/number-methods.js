//challenge area
let makeGuess = function(guess){
    let min = 1
    let max = 5

    let randonNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randonNum)
    return guess === randonNum
}

console.log(makeGuess(4))