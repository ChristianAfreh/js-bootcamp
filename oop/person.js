//Prototypal Inheritance



//For constructor function
// const Person = function (firstName,lastName,age,likes=[]){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function(){
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`        
//     });

//     return bio
// }


// Person.prototype.setName = function(fullName){
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }


class Person{
    constructor(firstName,lastName,age,likes=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`        
    });

    return bio
    }

    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
const me1 = new Person('Chris','Daniels',27,['Racing','Hiking'])
me1.setName('Francis Owusu')
console.log(me1.getBio())


const me2 = new Person('Ernest','Oduro',28)
console.log(me2.getBio())