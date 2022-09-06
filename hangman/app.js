// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage

// console.log(game1.remainingGuesses)
// game1.getStatusMessage()


window.addEventListener('keypress', (e) => {
    //tutorial used e.charCode(deprecated) and String.fromCharCode() method --> I used e.key instead
    const guess = e.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage


})


getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountryDetails('GH', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})


//Making an HTTP request
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place.')
//     }
// })

// https://puzzle.mead.io/puzzle -- for random phrases
// https://restcountries.com/v2/all -- for countries
// request.open('GET', 'https://restcountries.com/v2/all')
// request.send()

//Challenge
// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by its country code(alpha property)
// 4. Print the full country name(name property)

// const countryCode = "GH"

// const request1 = new XMLHttpRequest()

// request1.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((item) => item.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place.')
//     }
// })

// request1.open('GET', 'https://restcountries.com/v2/all')
// request1.send()