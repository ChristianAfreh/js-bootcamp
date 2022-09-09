'use strict'

//Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJson = localStorage.getItem('todos1')

    try {
        return todoJson ? JSON.parse(todoJson) : []

    } catch (e) {
        return []
    }

}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos1", JSON.stringify(todos))
}

//Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todo-text')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    ///Alternative filter
    // let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase())

    // )

    // filteredTodos = filteredTodos.filter((todo) => {
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     }
    //     else {
    //         return true
    //     }
    // })

    const isCompletedTodos = todos1.filter((todo) => !todo.completed
    )

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(isCompletedTodos))

    if (filteredTodos.length > 0) {

        filteredTodos.forEach((todo) => {

            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('list-title')
        messageEl.textContent = 'No todos to show'
        todoEl.appendChild(messageEl)
    }


}

//Challenge
//1. Setup a root div
//2. Setup and append a checkbox(set type attribute)
//someNode.setAttribute('type','checkbox')
//3. Setup and append a span(set text)
//4. Setup and append a button (set text)



//Get the DOM Elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const textEl = document.createElement('span')
    const removeEl = document.createElement('button')

    //Setup and append checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos1)
        renderTodos(todos1, filters1)
    })

    //setup and append text
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    //Setup ContainerEl
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //setup and append removeEl
    removeEl.textContent = 'remove'
    removeEl.classList.add('button', 'button--text')
    todoEl.appendChild(removeEl)
    removeEl.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos1)
        renderTodos(todos1, filters1)
    })

    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM = (isCompletedTodos) => {
    const summary = document.createElement('h2')
    const plural = isCompletedTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${isCompletedTodos.length} todo${plural} left.`
    return summary
}

//Challenge
// 1. Wire up button event
// 2. Remove todo by id
// 3. Save and rerender the todos list
const removeTodo = (id) => {
    const todoIndex = todos1.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos1.splice(todoIndex, 1)
    }

}

//Challenge
//1. Add Event handler to checkbox
//2. Modify the correct objects completed property
//3. Save and rerender
const toggleTodo = (id) => {
    const todoCheck = todos1.find((todo) => todo.id === id)

    if (todoCheck) {
        todoCheck.completed = !todoCheck.completed
    }

}