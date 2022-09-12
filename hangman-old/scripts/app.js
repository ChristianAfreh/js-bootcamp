// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

// puzzleEl.textContent = game1.Puzzle
// guessesEl.textContent = game1.StatusMessage

// console.log(game1.remainingGuesses)
// game1.getStatusMessage()


window.addEventListener('keypress', (e) => {
    //tutorial used e.charCode(deprecated) and String.fromCharCode() method --> I used e.key instead
    // const guess = e.key
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()


})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}



const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}


document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle(2).then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })




// getCountryDetails('GH').then((country) => {
//     console.log(country)
// }).catch((error) => {
//     console.log(error)
// })


// getLocation().then((location) => {
//     return getCountryDetails(location.country)
// }).then((country) => {
//     console.log(country)
// }).catch((error) => {
//     console.log(error)
// })


// getCurrentCountry().then((country) => {
//     console.log(country)
// }).catch((error) => {
//     console.log(error)
// })

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

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })