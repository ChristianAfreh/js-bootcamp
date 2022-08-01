//students score, total possible score
//eg. 15/20 -> You got a C(75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function(studentScore,totalScore = 20){
    let result = (studentScore / totalScore) * 100
    let letterGrade = ''

    if(result >= 90 && result <= 100){
        letterGrade = 'A'
    }
    else if(result >= 80 && result <= 89){
        letterGrade = 'B'
    }
    else if(result >= 70 && result <= 79){
        letterGrade = 'C'
    }
    else if(result >= 60 && result <= 69){
        letterGrade = 'D'
    }
    else if(result >= 0 && result <= 59){
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${result}%)!`

}

let student1 = gradeCalc(15)
let student2 = gradeCalc(10)
let student3 = gradeCalc(5)
let student4 = gradeCalc(12)
let student5 = gradeCalc(18)
let student6 = gradeCalc(16)

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)
console.log(student6)