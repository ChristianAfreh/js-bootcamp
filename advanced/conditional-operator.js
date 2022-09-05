const myAge = 27

const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'


console.log(message)


const showPage = () => {
	//console.log('Showing the page')		
	return 'Showing the page'
}

const showErrorPage = () => {
	//console.log('Show the error page')
	return 'Showing the error page'	
}

//myAge >= 21 ? showPage() : showErrorPage()

 message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

// Challenge
// 1.Print "Team size: 3" if less than or equal to 4
// 2.Print "Too many people on your team" otherwise

const team = ['Tyler','Porter']

message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(message)



//Challenge -- notes-function.js and todos-funtions.js

//for notes

const getSavedNotes  = () => {
	const notesJSON = localStorage.getItem('notes')
	
	return  notesJSON  !== null ?  JSON.parse(notesJSON) : []

}

