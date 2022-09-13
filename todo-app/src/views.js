import { getTodos, toggleTodo, removeTodo } from "./todos"
import { getFilters } from "./filters"



// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todoEl = document.querySelector('#todo-text')
    const filters = getFilters() //Alternative --> destructure filter object into {searchText,hideCompleted}
    const todos = getTodos()
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

    const isCompletedTodos = todos.filter((todo) => !todo.completed
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
        messageEl.textContent = 'There are no todos to show'
        todoEl.appendChild(messageEl)
    }


}


// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
        renderTodos()
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
        renderTodos()
    })

    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (isCompletedTodos) => {
    const summary = document.createElement('h2')
    const plural = isCompletedTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${isCompletedTodos.length} todo${plural} left.`
    return summary
}

// Make sure to set up the exports
export { generateTodoDOM, renderTodos, generateSummaryDOM }