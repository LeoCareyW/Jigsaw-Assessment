const express = require('express');
const app = express();
const getTransactions = require('./routers/fetchData')
const fetch = require('node-fetch');
// const insightsRouter = require('./routers/insights');
const categoryFunctions = require('./categoryFunction.js')
const cashFlowFunctions = require('./cashflowFunction.js')
//-----------
// const router = express.Router();

app.get('', (req, res) => {
  res.send('Hello Budget App')
});

app.listen(3000, () => {
  console.log('Insights server running')
});

app.get('/categories', (req, res) => {
  res.send('Categories file')
});

app.get('/cashflow', (req, res) => {
  res.send('Categories file')
});


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
      const arrayThis = categoryFunctions.timesCategoryAppears(categoryArray, data);
      const objects = categoryFunctions.summariseExpenses(arrayThis);
      res.send(categoryFunctions.nameObject(objects, categoryArray));
    })
})

app.get('/insights/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {
      const dates = cashFlowFunctions.getDates(data);
      const arrayThis = cashFlowFunctions.timesDateAppears(dates, data);
      const objects = cashFlowFunctions.summariseSpendingByDays(arrayThis);
      const formattedDatesArray = cashFlowFunctions.formatDates(dates);
      res.send(cashFlowFunctions.nameDates(objects, formattedDatesArray));
    })
})

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
