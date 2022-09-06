const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })



    request.open('GET', 'https://puzzle.mead.io/puzzle')
    request.send()
}


const getCountryDetails = (countryCode, callback) => {
    const req = new XMLHttpRequest()

    req.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((item) => item.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    req.open('GET', 'https://restcountries.com/v2/all')
    req.send()
}


