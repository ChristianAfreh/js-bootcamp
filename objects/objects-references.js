let myAccount = {
    name: 'Chris',
    expenses: 0,
    income: 0
}

let addExpense = function(account,amount){
    account.expenses = account.expenses + amount
}

let addIncome = function(account,amount){
    account.income = account.income + amount
}

let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income, $${account.expenses} in expenses.`
}

let resetAccount = function(account,amount){
    account.expenses = 0
    account.income = 0
}

account1 = addIncome(myAccount,1000)
console.log(getAccountSummary(myAccount))

account1 = addExpense(myAccount,200)
console.log(getAccountSummary(myAccount))

account1 = addExpense(myAccount,150)


console.log(getAccountSummary(myAccount))

account1 = resetAccount(myAccount)

console.log(getAccountSummary(myAccount))