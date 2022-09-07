const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })



    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})


const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()

    req.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((item) => item.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    req.open('GET', 'https://restcountries.com/v2/all')
    req.send()

})


