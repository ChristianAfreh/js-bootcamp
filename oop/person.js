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


// Subclasses
class Employee extends Person{
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }

    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft(){
        return 65-this.age
    }
}



const me1 = new Employee('Chris','Daniels',27,'Tutor',['Racing','Hiking'])
me1.setName('Francis Owusu')
console.log(me1.getBio())
console.log(me1.getYearsLeft())


const me2 = new Person('Ernest','Oduro',28)
console.log(me2.getBio())


//Challenge
//1. Create class for students
//2. Track student grade. 0 - 100
//3. Override bio to print a passing or failing message. 70 and above "Chris is passing the class"
//4. Create "updateGrade" that takes the amount to add or remove from the grade

//Create student 
//Print status (failing or passing)
//Change grade to change status
//Print status again

class Student extends Person{
    constructor(firstName,lastName,age,grade,likes){
        super(firstName,lastName,age,likes)
        this.grade = grade
    }

    getBio(){
            const status = this.grade >= 70 ? 'passing' : 'failing'
            return `${this.firstName} ${this.lastName} is ${status} the class.`
         
        
    }

    updateGrade(score){
        this.grade += score
    }
}

const student1 = new Student('Albert','Appiah',18,89,['Drawing','Swimming'])
console.log(student1.getBio())
student1.updateGrade(-30)
console.log(student1.getBio())