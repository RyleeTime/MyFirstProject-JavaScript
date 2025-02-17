const input = require('sync-input')
console.log('Earned amount:');
/*
My First Method
let sales = [Number(input('Bubblegum: $')), Number(input('Toffee: $')), Number(input('Ice Cream: $')), Number(input('Milk chocolate: $')), Number(input('Doughnut: $')), Number(input('Pancake: $'))]*/

let item = ['Bubblegum', 'Toffee', 'Ice cream', 'Milk chocolate', 'Doughnut', 'Pancake']
let sales = []
for (let i = 0; i < item.length; i++) {
    sales.push(Number(input(item[i]+': $')))
}

/*
The Method Expected by Hyperskill
let item = ['Bubblegum', 'Toffee', 'Ice cream', 'Milk chocolate', 'Doughnut', 'Pancake']
let sales = [202, 118, 2250, 1680, 1075, 80]
for (let i = 0; i < sales.length; i++) {
    console.log(item[i]+': $'+sales[i])
}
*/

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
console.log()
let Income = (sum(sales))
console.log('Income: $'+sum(sales))
let staffExpenses = Number(input('Staff Expenses: $'))
//console.log(Number(input('Staff Expenses :')))
let otherExpenses = Number(input('Other Expenses: $'))
//console.log(Number(input('Other Expenses :')))
let Expenses = Number(staffExpenses + otherExpenses)
let netIncome = Number(Income-Expenses)
console.log('Net Income: $'+netIncome)