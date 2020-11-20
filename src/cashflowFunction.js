//----------------------------------------------------------

const getDates = (data) => {

  const dateArray = []
  data.forEach((expense) => {
    if (!dateArray.includes(expense.paymentDate)) {
      dateArray.push(expense.paymentDate)
    };
  });
  console.log(dateArray)
  return(dateArray)
};



//----------------------------------------------------------

const timesDateAppears = (array, data) => {
  const categoryArray = []
  array.forEach((paymentDate) => {
  categoryArray.push(data.filter(expense => expense.paymentDate === paymentDate))
  })
  console.log(categoryArray)
  return categoryArray
}


//----------------------------------------------------------

 const summariseSpendingByDays = (array) => {
  const finalArray = []
    array.forEach((innerArray) => {
      let totalValue = 0
      innerArray.forEach((item) => {
        totalValue += item.amount
        })
       finalArray.push(item = {
          totalNumber: innerArray.length,
          totalValue: totalValue,
          averageValue: (totalValue / innerArray.length)
        })
      })
    console.log(finalArray)
    return(finalArray)
  }



//----------------------------------------------------------

const formatDates = (dates) => {
  const formattedDates = []
  dates.forEach((date) => {
    formattedDates.push(`${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`)
  })
  return formattedDates
}



//----------------------------------------------------------


const nameDates = (objects, categoryArray) => {
  const cashflowArray = []
    for (let i = 0; i <= categoryArray.length - 1; i++) {
      cashflowArray.push(`{ "${categoryArray[i]}": { "totalNumber": ${objects[i].totalNumber}, "totalValue": ${objects[i].totalValue}, "averageValue": ${objects[i].averageValue} }`)
    }
  return cashflowArray;
}

module.exports = {
  getDates: getDates,
  timesDateAppears: timesDateAppears,
  summariseSpendingByDays: summariseSpendingByDays,
  formatDates: formatDates,
  nameDates: nameDates
}

