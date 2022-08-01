//Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todoJson = localStorage.getItem('todos1')
    if (todoJson !== null) {
        return JSON.parse(todoJson)
    }
    else {
        return []
    }
}

//Save todos to localStorage
const saveTodos = function () {
    localStorage.setItem("todos1", JSON.stringify(todos1))
}

//Render application todos based on filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {

        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())

    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        }
        else {
            return true
        }
    })

    document.querySelector('#todo-text').innerHTML = ''

    const isCompletedTodos = todos1.filter(function (todo) {
        return !todo.completed
    })



    document.querySelector('#todo-text').appendChild(generateSummaryDOM(isCompletedTodos))

    filteredTodos.forEach(function (todo) {

        document.querySelector('#todo-text').appendChild(generateTodoDOM(todo))
    })

}

//Challenge
//1. Setup a root div
//2. Setup and append a checkbox(set type attribute)
//someNode.setAttribute('type','checkbox')
//3. Setup and append a span(set text)
//4. Setup and append a button (set text)



//Get the DOM Elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const textEl = document.createElement('span')
    const removeEl = document.createElement('button')

    //Setup and append checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos()
        renderTodos(todos1, filters1)
    })

    //setup and append text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    //setup and append removeEl
    removeEl.textContent = 'x'
    todoEl.appendChild(removeEl)
    removeEl.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos()
        renderTodos(todos1, filters1)
    })


    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM = function (isCompletedTodos) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${isCompletedTodos.length} todos left.`
    return summary
}

//Challenge
// 1. Wire up button event
// 2. Remove todo by id
// 3. Save and rerender the todos list
const removeTodo = function (id) {
    const todoIndex = todos1.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos1.splice(todoIndex, 1)
    }

}

//Challenge
//1. Add Event handler to checkbox
//2. Modify the correct objects completed property
//3. Save and rerender
const toggleTodo = function (id) {
    const todoCheck = todos1.find(function (todo) {
        return todo.id === id
    })

    if (todoCheck !== undefined) {
        todoCheck.completed = !todoCheck.completed
    }

}