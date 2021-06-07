let money = prompt("Ващ бюджет на месяц,");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer1 = prompt("Во сколько обойдется?");
let question2 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

appData.expenses[question1] = answer1;
appData.expenses[question2] = answer2;

