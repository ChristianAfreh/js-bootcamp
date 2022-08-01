const account = {
    name: 'Chris Prosper',
    expenses: [],
    income: [],
    addExpense: function(description,amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description,amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense,){
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount 
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}

//Challenge 1
//Expense -> description,amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses => Chris Prosper has $1250 in expenses.

//Challenge 2
//1. add income array to account
//2. addIncome method => description,amount
//3. Tweak getAccountSummary

account.addExpense('Rent',950)
account.addExpense('Food',2)
account.addIncome('Salary',1000)

console.log(account.getAccountSummary())