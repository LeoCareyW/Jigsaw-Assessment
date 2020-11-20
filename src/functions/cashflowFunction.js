const getDates = (data) => {

  const dateArray = [];
  data.forEach((expense) => {
    if (!dateArray.includes(expense.paymentDate)) {
      dateArray.push(expense.paymentDate)
    };
  });
  return(dateArray)
};


const timesDateAppears = (array, data) => {
  const dateArray = [];
  array.forEach((paymentDate) => {
  dateArray.push(data.filter(expense => expense.paymentDate === paymentDate))
  });
  return dateArray
};


const summariseSpendingByDays = (array) => {
  const finalArray = [];
  array.forEach((innerArray) => {
    let totalValue = 0
    innerArray.forEach((item) => {
      totalValue += item.amount
      })
      finalArray.push(item = {
        totalNumber: innerArray.length,
        totalValue: totalValue,
        averageValue: (totalValue / innerArray.length)
      });
    });
  return(finalArray)
};


const formatDates = (dates) => {
  const formattedDates = [];
  dates.forEach((date) => {
    formattedDates.push(`${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`)
  });
  return formattedDates
};

const nameDates = (objects, datesArray) => {
  const cashflowArray = [];
    for (let i = 0; i <= datesArray.length - 1; i++) {
      cashflowArray.push(`{ "${datesArray[i]}": { "totalNumber": ${objects[i].totalNumber}, "totalValue": ${objects[i].totalValue}, "averageValue": ${objects[i].averageValue} }`)
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
