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

      res.send(data)

    })
})

app.get('/insights/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then(res => res.json())
    .then(data => {

      res.send(data)

    })
})

// const fetch = require('node-fetch');

// const getTransactions = async () => {
//   const response = await fetch('http://54.154.227.172:3000/transactions', {})
//     if (response.status === 200) {
//       const data = await response.json()
//       console.log(data)
//     } else {
//     throw new Error('Unable to fetch transactions')
//   }
// }

// module.exports = getTransactions





//---------
// app.use('/insights', insightsRouter)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
