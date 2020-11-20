const getCategories = (data) => {

  const categoryArray = [];
  data.forEach((expense) => {
    if (!categoryArray.includes(expense.category)) {
      categoryArray.push(expense.category);
    };
  });
  return categoryArray;
};


const timesCategoryAppears = (array, data) => {
  const categoryArray = [];
  array.forEach((category) => {
  categoryArray.push(data.filter(expense => expense.category === category));
  });
   return categoryArray;
};


const summariseExpenses = (array) => {
  const finalArray = [];
  array.forEach((innerArray) => {
    let totalValue = 0;
    innerArray.forEach((item) => {
      totalValue += item.amount
      })
     finalArray.push(item = {
        totalNumber: innerArray.length,
        totalValue: totalValue,
        averageValue: (totalValue / innerArray.length)
      });
    });
  return(finalArray);
  };


const nameObject = (objects, categoryArray) => {
  const categoriesArray = [];
  for (let i = 0; i <= categoryArray.length - 1; i++) {
    categoriesArray.push(`{ "${categoryArray[i]}": { "totalNumber": ${objects[i].totalNumber}, "totalValue": ${objects[i].totalValue}, "averageValue": ${objects[i].averageValue} }`)
  };
  return categoriesArray;
};


module.exports = {
  getCategories: getCategories,
  timesCategoryAppears: timesCategoryAppears,
  summariseExpenses: summariseExpenses,
  nameObject: nameObject
}
