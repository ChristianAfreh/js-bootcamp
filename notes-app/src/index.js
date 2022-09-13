import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes()



document.querySelector('#create-note').addEventListener('click', (e) => {

    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }

})



//Unix Epoch - January 1st 1970 00:00:00
// const date1 = new Date('August 2 2022 12:00:00');
// const date2 = new Date();
// const date1Timestamp = date1.getTime();
// const date2Timestamp = date2.getTime();

// if (date1Timestamp < date2Timestamp) {
//     console.log(date1.toString());
// }
// else if (date2Timestamp < date1Timestamp) {
//     console.log(date2.toString());
// }

//using moment.js library --> format(), formNow(), valueOf(), toString()

// const now = moment();
// console.log(now.toString())


// //Challenge--My Birthday
// const myBday = moment();
// myBday.date(26).month(04).year(1998);

// console.log(myBday.format('dddd, Do MMMM, YYYY'));