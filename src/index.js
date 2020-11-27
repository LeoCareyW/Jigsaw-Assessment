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


app.get('/insights', async (req, res, next) => {
  try {
  await fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      res.send(data)
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/insights/categories', async (req, res, next) => {
  try {
  await fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      const categoryArray = categoryFunctions.getCategories(data);
      const arrayOfAppearances = categoryFunctions.timesCategoryAppears(categoryArray, data);
      const objects = categoryFunctions.summariseExpenses(arrayOfAppearances);
      res.json(categoryFunctions.nameObject(objects, categoryArray));
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/insights/cashflow', async (req, res, next) => {
  try {
   await fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      const dates = cashFlowFunctions.getDates(data);
      const arrayOfAppearances = cashFlowFunctions.timesDateAppears(dates, data);
      const objects = cashFlowFunctions.summariseSpendingByDays(arrayOfAppearances);
      const formattedDatesArray = cashFlowFunctions.formatDates(dates);
      const startMonth = cashFlowFunctions.getEarliestDate(dates)
      const completeDatesArray = cashFlowFunctions.insertZeroValueDates();
      const shortDatesList = cashFlowFunctions.reFormatDates(dates)
      res.json(cashFlowFunctions.fillInData(shortDatesList, completeDatesArray, objects));
    })
  } catch (error) {
    console.log(error)
  }
})

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
