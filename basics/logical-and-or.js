//Logical And(&&) Operator - True if both sides are true.False Otherwise
//Logical Or(||) Operator - True if at least one side is true. False otherwise


//Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

//Are both vegan? Only offer up vegan dishes
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes')
}
//At least one vegan? Make sure to offer up some vegan options
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options')
}
//Else, Offer up anything on the menu
else{
    console.log('Offer up anything on the menu')
}
