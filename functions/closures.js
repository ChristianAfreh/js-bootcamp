
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))


// Challenge --> Tipper
// 1. Create createTipper which takes in the base tip(.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them


const createTipper = (BaseTip) => {
    return (BillAmount) => BaseTip * BillAmount
}


const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

console.log(tip20(100))
console.log(tip30(100))