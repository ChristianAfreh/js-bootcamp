
let recipes = getSavedRecipes()

const filters = {
    searchText: ''
}


renderRecipes(recipes, filters)

document.querySelector('#add-recipe').addEventListener('click', (e) => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        body: '',
        ingredients: []
    })
    saveRecipes(recipes)
    console.log(localStorage)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderRecipes(recipes, filters)
})


window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        recipes = JSON.parse(e.newValue)
        renderRecipes(recipes, filters)
    }
})



