//Array methods for manipulating arrays
//Push(param=item to be added) and Pop(no param but returns deleted item) for the last item & Unshift(param1=item to be added at the first position) and Shift(no param,returns deleted first item) for the first item
// Splice(param1=where to begin,param2=no of items to delete,param2= item to be added) to remove or add items in the middle of the array

// Searching for elements(objects) of an array by parsing a string
//Filtering array by parsing object properties
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

const filterNote = function(notes,searchString){
    const filteredArray = notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(searchString)
        const isBodyMatch = note.body.toLowerCase().includes(searchString)
    return isTitleMatch || isBodyMatch
    })
    return filteredArray
}

console.log(filterNote(notes1,'xe'))

//Sorting array items using the sort() method 