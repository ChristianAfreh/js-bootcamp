// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters


// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (updates) => {

    //using destructuring parse --> {searchText,hideCompleted} as parameters instead of updates object
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
    }
}

// Make sure to set up the exports
export { getFilters, setFilters }