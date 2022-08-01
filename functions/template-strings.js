// Back ticks `${}` are used

//Challenge Area
let getTip = function(total, tipPercent = 0.2){
    let percent = tipPercent * 100
    let result = total  * tipPercent
    return `A ${percent}% tip for $${total} is $${result}.`
}

let tip1 = getTip(100)
let tip2 = getTip(200)
let tip3 = getTip(500,0.3)
console.log(tip1)
console.log(tip2)
console.log(tip3)