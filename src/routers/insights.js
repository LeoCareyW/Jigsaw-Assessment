// categories

// total and average value of all transactions grouped by category

//

// {
//   "food": {
//     "totalNumber": 10,
//     "totalValue": 400,
//     "averageValue": 40
//   },

// for each category, get name add to array
// for each name in array, filter list by that category
// return .length + 1, totalValue, averageValue
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


const getCategories = (data) => {
  const mySet = new Set()

  data.forEach((expense) => {
    if (!mySet.has(expense.category)) {
      mySet.add(expense.category)
    };
    return mySet
  });
};


const timesCategoryAppears = (data, set) => {
  const allCategories = []
  set.forEach((item) => {
    const singularCategory = []
    const categoryInData = data.filter(expense => expense.category === set)
    singularCategory.push(categoryInData)
    allCategories.push(singularCategory)
  })
}

const expenseCategoryOverview = (arrays) => {
  arrays.forEach((array) => {
    array.forEach((item) => {

    })
  })
}



const result = words.filter(word => word.length > 6);



