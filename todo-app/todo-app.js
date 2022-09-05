'use strict'

// const pS = document.querySelectorAll('p')

// pS.forEach( function(p){
//     console.log(p.textContent)
// })

// pS.forEach( function(ele){
//     if( ele.textContent.includes('the')){
//     ele.remove()
//     }
// })

//Add new tag to page --> document.CreateElement('tagName')


//Challenge --My solution

// const inCompleted = function(todos){
//     let count = 0
//     todos.forEach(function(ele){
//         if(!ele.completed){
//             count = count + 1
//         }
//     })
//     return `You have ${count} todos left.`
// }


// const para1 = document.createElement('p')
// para1.textContent=inCompleted(todos1)
// document.querySelector('body').appendChild(para1)

// const listTodos = function(todos){
//     const paraList = []
//     todos.forEach( function(ele){
//         para2 = ele.text
//         paraList.push(para2)
//     })

//     paraList.forEach(function(ele){
//         const para3 = document.createElement('p')
//         para3.textContent = ele
//         document.querySelector('body').appendChild(para3)
//     })

// }


// {
//     text: 'Have quite time',
//     completed: true
// },{
//     text: 'Take my bath',
//     completed: false
// },{
//     text: 'Have breakfast',
//     completed: true
// },{
//     text: 'Take Programming Tutorials',
//     completed: false    
// },{
//     text: 'Walk the dogs',
//     completed: true
// }
// listTodos(todos1)

//solution from tutorial





// todos1.forEach(function(todo){
//     const todoText = document.createElement('p')
//     todoText.textContent = todo.text
//     document.querySelector('body').appendChild(todoText)
// })

//Event Listeners
// document.querySelector('#addTodo').addEventListener('click',function(){
//     const p = document.createElement('p')
//     p.textContent = 'I am about to add a new todo...'
//     document.querySelector('#addMessage').appendChild(p)
// })


let todos1 = getSavedTodos()




const filters1 = {
    searchText: '',
    hideCompleted: false
}



renderTodos(todos1, filters1)

document.querySelector('#new-todo').addEventListener('input',  (e) => {
    filters1.searchText = e.target.value
    renderTodos(todos1, filters1)
})


document.querySelector('#todo-form').addEventListener('submit',  (e) => {
    e.preventDefault()
    todos1.push({
        id: uuidv4(),
        text: e.target.elements.addTodo.value,
        completed: false
    })
    saveTodos(todos1)
    renderTodos(todos1, filters1)
    e.target.elements.addTodo.value = ''
})


document.querySelector('#hide-completed').addEventListener('change',  (e) => {
    filters1.hideCompleted = e.target.checked
    renderTodos(todos1, filters1)

})








