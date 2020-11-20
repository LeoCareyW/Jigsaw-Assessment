const data = [
 {
    id: 'f112292d-a01b-493a-a935-74d7f10c91ac',
    paymentDate: '2020-11-04T00:00:00.000Z',
    amount: 6,
    merchant: 'Starbucks',
    category: 'Food'
  },
  {
    id: 'e435bde2-7066-4abf-a992-8078a9dd7592',
    paymentDate: '2020-11-04T00:00:00.000Z',
    amount: 10,
    merchant: 'Tesco Ltd',
    category: 'Food'
  },
  {
    id: '35997491-7daf-424b-9f76-cdf7b02eefeb',
    paymentDate: '2020-11-02T00:00:00.000Z',
    amount: 6,
    merchant: 'Starbucks',
    category: 'Food'
  },
  {
    id: '732bf4e5-66e9-4de7-a875-662d44bbb9ad',
    paymentDate: '2020-11-02T00:00:00.000Z',
    amount: 10,
    merchant: 'Charitable Donations Co.',
    category: 'Charity'
  },
  {
    id: 'c90d4190-98c6-4a8c-8deb-8dfb2cc7f385',
    paymentDate: '2020-11-04T00:00:00.000Z',
    amount: 10,
    merchant: 'Tesco Ltd',
    category: 'Food'
  },
  {
    id: '157186ce-8d92-44ce-b846-13ca102dc2a9',
    paymentDate: '2020-10-19T00:00:00.000Z',
    amount: 1,
    merchant: 'TFL London',
    category: 'Transport'
  },
  {
    id: '614ee47a-9c7a-4336-b446-c08dedfc8040',
    paymentDate: '2020-11-04T00:00:00.000Z',
    amount: 6,
    merchant: 'TFL London',
    category: 'Travel'
  },
  {
    id: 'c47fe27d-dc67-4a1a-8da8-5c0371f86c15',
    paymentDate: '2020-10-30T00:00:00.000Z',
    amount: 4,
    merchant: 'Starbucks',
    category: 'Food'
  },
  {
    id: '8a1445cf-6c6f-4ab6-ab1a-87a1b7b93520',
    paymentDate: '2020-10-16T00:00:00.000Z',
    amount: 19,
    merchant: 'Marks & Spencer',
    category: 'Food'
  }
]


const getCategories = (data) => {

  const categoryArray = []
  data.forEach((expense) => {
    if (!categoryArray.includes(expense.category)) {
      categoryArray.push(expense.category)
    };
  });
  return categoryArray;
};

const categoryArray = getCategories(data);

//----------------------------------------------------------

const timesCategoryAppears = (array, data) => {
  const categoryArray = []
  array.forEach((category) => {
  categoryArray.push(data.filter(expense => expense.category === category))
  })
   return categoryArray
}

const arrayThis = timesCategoryAppears(categoryArray, data);

//----------------------------------------------------------

const summariseExpenses = (array) => {
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
  return(finalArray)
  }

const objects = summariseExpenses(arrayThis);

//----------------------------------------------------------

const nameObject = (objects, categoryArray) => {
  for (let i = 0; i <= categoryArray.length - 1; i++) {
    console.log(`${categoryArray[i]} = TotalNumber: ${objects[i].totalNumber}, totalValue: ${objects[i].totalValue}, averageValue: ${objects[i].averageValue}`)
  }
}

//----------------------------------------------------------

getCategories(data);
timesCategoryAppears(categoryArray, data);
summariseExpenses(arrayThis)
nameObject(objects, categoryArray);









