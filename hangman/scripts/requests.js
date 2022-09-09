const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}


// return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })

const getCountryDetails = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v2/all', {})
    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country.name
    } else {
        throw new Error('Unable to get country')
    }

}


//api --> https://ipinfo.io/json?token=2c7b5218f17ae4

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=2c7b5218f17ae4', {})
    if (response.status === 200) {
        const data = await response.json()
        return data

    } else {
        throw new Error('Unable to get location')
    }
}


getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetails(location.country)
}

// .then((response) => {
//     if (response.status === 200) {
//         return response.json()

//     } else {
//         throw new Error('Unable to fetch data')
//     }
// }).then((data) => {
//     return data
// })