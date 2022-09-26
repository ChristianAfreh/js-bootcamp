
//Read existing recipes from localStorage
const getSavedRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')

    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the recipes to localStorage
const saveRecipes = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}


//Remove a recipe from the list
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
    }
}


//Remove an ingredient from recipe
const removeIngredient = (id) => {

    const ingredients = recipe.ingredients

    const ingredientIndex = ingredients.findIndex((ingredient) => ingredient.id === id)
    if (ingredientIndex > -1) {
        ingredients.splice(ingredientIndex, 1)
    }
}

//Generate the DOM structure for a recipe
const generateRecipeDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    //setup the recipe title text
    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Untitled recipe'
    }
    textEl.classList.add('list-item__title')
    recipeEl.appendChild(textEl)

    //setup the link
    recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)
    recipeEl.classList.add('list-item')

    //setup the status message
    statusEl.textContent = generateIngredientStatus(recipe.ingredients)
    statusEl.classList.add('list-item__subtitle')
    recipeEl.appendChild(statusEl)

    return recipeEl

}

//Render app recipes
const renderRecipes = (recipes, filters) => {
    const recipesEl = document.querySelector('#recipes')
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    recipesEl.innerHTML = ''

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach((recipe) => {
            const recipeEl = generateRecipeDOM(recipe)
            recipesEl.appendChild(recipeEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        emptyMessage.classList.add('empty-message')
        recipesEl.appendChild(emptyMessage)
    }


}

// Render Ingredients
const renderIngredients = () => {
    const ingredients = recipe.ingredients
    const ingredientEl = document.querySelector('#ingredients')
    ingredientEl.innerHTML = ''

    if (ingredients.length > 0) {

        ingredients.forEach((ingredient) => {
            ingredientEl.appendChild(generateIngredientDOM(ingredient))
        })

    }
    else {
        const messageEl = document.createElement('p')
        messageEl.textContent = 'No added ingredients'
        ingredientEl.appendChild(messageEl)
    }

}

//Generate ingredient status message
const generateIngredientStatus = (ingredients) => {
    let count = 0
    ingredients.forEach((ingredient) => {
        if (ingredient.isAdded) {
            count++
        }
    })
    if (count > 0 && count < ingredients.length) {
        return 'You have some of the ingredients'
    }
    else if (count === ingredients.length) {
        return 'You have all of the ingredients'
    }
    else {
        return 'You have none of the ingredients'
    }

}


//Generate Ingredient DOM
const generateIngredientDOM = (ingredient) => {
    const ingredientEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const ingredientText = document.createElement('span')
    const removeButton = document.createElement('button')


    //Setup ingredient checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = ingredient.isAdded
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', () => {
        toggleIngredient(ingredient.id)
        saveRecipes(recipes)
        renderIngredients()

    })


    //setup the ingredient text
    ingredientText.textContent = ingredient.text
    containerEl.appendChild(ingredientText)


    //setup container
    ingredientEl.classList.add('list-item__ingredient')
    containerEl.classList.add('list-item__container')
    ingredientEl.appendChild(containerEl)


    //setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text__ingredient')
    ingredientEl.appendChild(removeButton)

    removeButton.addEventListener('click', () => {
        removeIngredient(ingredient.id)
        saveRecipes(recipes)
        renderIngredients(ingredients)
    })

    return ingredientEl
}


