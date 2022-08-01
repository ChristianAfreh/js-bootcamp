//Challenge Area
//Create an array with five todos
//Print -> You have x todos
//Print -> The first and the Second to last items -> Todo: walk the dog

// const todos = ['Have quite time','Take my bath','Have breakfast','Take Programming Tutorials','Walk the dogs']

// console.log(`You have ${todos.length} todos.`)
// console.log(`Todo: ${todos[0]}.`)
// console.log(`Todo: ${todos[1]}.`)
// console.log(`Todo: ${todos[2]}.`)
// console.log(`Todo: ${todos[3]}.`)
// console.log(`Todo: ${todos[4]}.`)

//Challenge Area 2
//Delete the 3rd item
//Add a new item to the end
//Remove the first item from the list


// todos.splice(2,1)
// todos.push('Check up on friends')
// todos.shift()
// console.log(todos)


//Challenge 3 -- Using forEach() method
//Print each item of the array
// console.log(`You have ${todos.length} todos.`)
//     console.log(`${++index}. ${item}`)
// })

//Challenge 4 -- using for() method
//Print out each item of the array
// let num = 1
// for(let count = 0;count < todos.length; count++){
//     console.log(`${num}. ${todos[count]}`)
//     num++
// }

//Challenge 5 -- using indexOf(), findIndex() and find() array methods

//1. Convert  array to array of objects -> text, completed
//2. Create function to remove a todo by text value


const todos1 = [{
    text: 'Have quite time',
    completed: true
},{
    text: 'Take my bath',
    completed: false
},{
    text: 'Have breakfast',
    completed: true
},{
    text: 'Take Programming Tutorials',
    completed: false    
},{
    text: 'Walk the dogs',
    completed: true
}]

// const deleteTodo = function(todos,todoText){
//     const todoIndex = todos.findIndex(function(todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     if(todoIndex > -1){
//         return todos.splice(todoIndex,1)
//     }
// }

// console.log(todos1)
// console.log(deleteTodo(todos1,'bath'))
// console.log(todos1)

//Challenge area 5 --- filter todos
// const getThingsToDo = function(todos,isCompleted){
//     const filteredTodo = todos.filter(function(todo){
        
//         return todo.completed === isCompleted
        
//     })
//     return filteredTodo
// }

// console.log(getThingsToDo(todos1,false))

// const getThingsToDo = function(todos){
//     const filteredTodo = todos.filter(function(todo){
        
//         return todo.completed === true
        
//     })
//     return filteredTodo
// }

// console.log(getThingsToDo(todos1))

//Challenge Area 6 -- sorting todos

const sortedTodos = function(todos){
   return todos.sort(function(a,b){
        if(a.completed === false){
            return -1
        }
        else if(b.completed === false){
            return 1
        }
        else{
            return 0
        }
    })
}

console.log(sortedTodos(todos1))

