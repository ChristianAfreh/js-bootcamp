//DOM - Document Object Model - object in JS & HTML Document
const notes1 = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


const filters1 = {
    searchText: ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)

    })

}


renderNotes(notes1,filters1)

// use of QuerySelector 
// const p = document.querySelector('p')
// console.log(p)

// use of QuerySelectorAll
// const pS = document.querySelectorAll('p')

// pS.forEach( function(p){
//     //p.textContent='**************'
//     //console.log(p.textContent)
//     //p.remove()
// })



document.querySelector('#search-text').addEventListener('input',function(e){
    filters1.searchText = e.target.value
    renderNotes(notes1,filters1)
})