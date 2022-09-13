
// // //The rest parameter
// // const calculateAverage = (thing, ...numbers) => {
// //     //return (numOne + numTwo) / 2
// //     let sum = 0
// //     numbers.forEach((num) => sum += num)
// //     const average = sum / numbers.length
// //     return `The average ${thing} is ${average}`
// // }
// // console.log(calculateAverage('score', 0, 100, 200, 30, 400))




// //Challenge
// //Create printTeam that takes team name,coach and players
// //Team: Liberty
// //Coach: Casey Penn
// //Players: Marge,Aiden,Herbert,Sherry



// //The  Spread syntax
// const printTeam = (teamName, coachName, ...players) => {
//     console.log(`Team: ${teamName}`)
//     console.log(`Coah: ${coachName}`)
//     console.log(`Players: ${players.join(', ')}`)
// }

// const team = {
//     name: 'Liberty',
//     coach: 'Casey Penn',
//     players: ['Merge', 'Aiden', 'Herbet', 'Sherry']
// }
// printTeam(team.name, team.coach, ...team.players)

// let cities = ['Barcelona', 'Cape Town', 'Bordeaux']

// cities = [...cities, 'Santiago']
// console.log(cities)

// let house = {
//     bedroom: 2,
//     bathrooms: 1.5,
//     yearBuilt: 2017
// }

// let newHouse = {
//     basement: true,
//     ...house
// }

// console.log(house)
// console.log(newHouse)

// //Challenge
// //Create a person object with name and age
// //Create a location object with city and country
// //Create a new overview object and use the spread operator to add all four properties

// const person = {
//     name: 'Chris',
//     age: 30
// }

// const location = {
//     city: 'Kumasi',
//     country: 'Ghana'
// }

// const overview = {
//     ...person,
//     ...location
// }

// console.log(overview)

//Destructuring
