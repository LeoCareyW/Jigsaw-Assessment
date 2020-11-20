const express = require('express');
const app = express();
const fetch = require('node-fetch');

const categoryFunctions = require('../src/functions/categoryFunction.js')
const cashFlowFunctions = require('../src/functions/cashflowFunction.js')

// I moved all index.js data into this file so that all server information is in one file
//and reduce folder clutter

app.listen(3000, () => {
  console.log('Insights server running')
});


// Three different server responses and urls

app.get('/insights', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      res.send(data)
    })
})

app.get('/insights/categories', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      const categoryArray = categoryFunctions.getCategories(data);
      const arrayOfAppearances = categoryFunctions.timesCategoryAppears(categoryArray, data);
      const objects = categoryFunctions.summariseExpenses(arrayOfAppearances);
      res.json(categoryFunctions.nameObject(objects, categoryArray));
    })
})

app.get('/insights/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      const dates = cashFlowFunctions.getDates(data);
      const arrayOfAppearances = cashFlowFunctions.timesDateAppears(dates, data);
      const objects = cashFlowFunctions.summariseSpendingByDays(arrayOfAppearances);
      const formattedDatesArray = cashFlowFunctions.formatDates(dates);
      res.json(cashFlowFunctions.nameDates(objects, formattedDatesArray));
    })
})

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
