

const titleElement = document.querySelector('#recipe-title')
const bodyElement = document.querySelector('#recipe-body')
const removeElement = document.querySelector('#remove-recipe')

const recipeId = location.hash.substring(1)

let recipes = getSavedRecipes()

let recipe = recipes.find((recipe) => recipe.id === recipeId)


if (!recipe) {
    location.assign('/index.html')
}

titleElement.value = recipe.title
bodyElement.value = recipe.body

renderIngredients()

titleElement.addEventListener('input', (e) => {
    recipe.title = e.target.value
    saveRecipes(recipes)
})

bodyElement.addEventListener('input', (e) => {
    recipe.body = e.target.value
    saveRecipes(recipes)
})

removeElement.addEventListener('click', (e) => {
    removeRecipe(recipe.id)
    saveRecipes(recipes)
    location.assign('/index.html')
})



window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        recipes = JSON.parse(e.newValue)
        recipe = recipes.find((recipe) => recipe.id === recipeId)
    }

    titleElement.value = recipe.title
    bodyElement.value = recipe.body
})



document.querySelector('#ingredient-form').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()
    if (text.length > 0) {
        recipe.ingredients.push({
            id: uuidv4(),
            text,
            isAdded: false
        })
        saveRecipes(recipes)
        renderIngredients()
        e.target.elements.text.value = ''
    }
})

//Toggle the isAdded value for a given ingredient
const toggleIngredient = (id) => {
    const ingredients = recipe.ingredients
    const ingredient = ingredients.find((ingredient) => ingredient.id === id)

    if (ingredient) {
        ingredient.isAdded = !ingredient.isAdded
    }
}
