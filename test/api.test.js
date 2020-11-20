const data = require('./dummyData')
const categoryFunction = require('../src/functions/categoryFunction')
const cashflowFunction = require('../src/functions/cashflowFunction')

// function calls for category tests
const categoryArray = categoryFunction.getCategories(data);
const arrayOfAppearances = categoryFunction.timesCategoryAppears(categoryArray, data);
const categoryObjects = categoryFunction.summariseExpenses(arrayOfAppearances);
const finalCall = categoryFunction.nameObject(categoryObjects, categoryArray);

// function calls for cash flow tests
const dates = cashflowFunction.getDates(data);
const arrayOfDateAppearances = cashflowFunction.timesDateAppears(dates, data);
const dateObjects = cashflowFunction.summariseSpendingByDays(arrayOfAppearances);
const formattedDatesArray = cashflowFunction.formatDates(dates);

// These tests are for the category functions responsible for manipulating the data on
// insights/categories

test('Data should return an array of categories', () => {
  const result = categoryArray;
  if (result[0] !== 'Food' && result[3] !== 'Travel') {
    throw new Error('Categories are not correct')
  };
});

test('Categories should be ordered correctly', () => {
  const result = arrayOfAppearances;
  if (result[0][0].amount !== 48) {
    throw new Error('Categories are not correct')
  };
});

test('Expenses should be summarised without titles', () => {
  const result = categoryObjects;
  if (result[1].totalValue !== 16) {
    throw new Error('The function did not return the correct objects');
  }
})

test('Final result should be labeled', () => {
  const result = finalCall;
  if (result[0] !== '{ "Food": { "totalNumber": 5, "totalValue": 2362, "averageValue": 472.4 }') {
    throw new Error('The final result was not formatted properly')
  };
});

// These tests are for the cashflow functions responsible for manipulating the data on
// insights/cashflow

test('Data should return an array of dates', () => {
  const result = dates
  if (result[1] !== '2020-10-29T00:00:00.000Z') {
    throw new Error('Categories are not correct')
  };
});

test('Dates should be ordered correctly', () => {
  const result = arrayOfDateAppearances
  if (result[0].paymentDate !== result[1].paymentDate) {
    throw new Error('The list of dates is not ordered correctly')
  }
})

test('Dates should be summarised', () => {
  const result = dateObjects
  if (dateObjects[0].totalValue / dateObjects[0].totalNumber !== dateObjects[0].averageValue ) {
    throw new Error('The dates are not summarised together correctly')
  }
})

test('Expenses by date should be formatted correctly', () => {
  const result = formattedDatesArray
  if (result[0] !== '09/10/2020') {
    throw new Error('The expenses are not correcttly formatted')
  }
})
