let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)



document.querySelector('#create-note').addEventListener('click',  (e) => {

    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input',  (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change',  (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage',  (e) => {
    if (e.key === 'notes');
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
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