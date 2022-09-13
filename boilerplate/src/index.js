
//The rest parameter
const calculateAverage = (thing, ...numbers) => {
    //return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('score', 0, 100, 200, 30, 400))

//Challenge
//Create printTeam that takes team name,coach and players
//Team: Liberty
//Coach: Casey Penn
//Players: Marge,Aiden,Herbert,Sherry


const printTeam = (teamName, coachName, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coah: ${coachName}`)
    console.log(`Players: ${players.join(', ')}`)
}


printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')