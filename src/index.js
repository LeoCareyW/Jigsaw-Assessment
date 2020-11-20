const express = require('express');
const app = express();
const getTransactions = require('./routers/fetchData')
const fetch = require('node-fetch');
// const insightsRouter = require('./routers/insights');
const axios = require('axios');
app.set('view engine', 'ejs')
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

// app.get('/expenses', (req, res) => {
//   getTransactions = () => {
//     if (error) {
//       return res.send({ error })
//     }
//     res.send('transactions')


app.get('/expenses', (req, res, next) => {
  axios.get('http://54.154.227.172:3000/transactions')
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  });
  res.json(response)
})

console.log(getTransactions())


//---------
// app.use('/insights', insightsRouter)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
