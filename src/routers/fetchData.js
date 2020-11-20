// This was my original call for fetching the JSON data, including async await functions and
// catches for errors
// I was not able to implement this within the get.res in time and so favoured a simpler call
// so that I could focus instead on testing

const fetch = require('node-fetch');

const getTransactions = async () => {
  const response = await fetch('http://54.154.227.172:3000/transactions', {})
    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
    throw new Error('Unable to fetch transactions')
  }
}

module.exports = getTransactions


