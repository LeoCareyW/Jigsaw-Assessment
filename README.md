------------------------

Hi Team,

Thanks for the challenge today, it was tricky, and I didn't manage to complete it to the level
that I would have liked, however I was able to get a satisfactory result. I have detailed
the issues down below, as well as the various libraries I used and why.


## Requirements:
1) The server should fetch the data list at /insights
**Result:** Success

2) The user can go to /categories and see a breakdown of spending by category
**Result:** Partial success (Visually this aspect works, however it is **not** returned
as a JSON, this makes any manipulation of the data less seamless)

3) The user can go to /cashflow and see a breakdown of spending by date
**Result:** Partial Success (If there is no spending on the date, the date does not show.
Also, as above, the response is not JSON formatted)

4) Include a test suite so that the app can be scaled and reformatted with greater ease
**Result:** Success, however ideally I would have preferred to test more thoroughly


## Failures:

- The incorrect format for the response was my biggest dissapointment with this project as it
fundamentally affects its usefulness of the API server.


## Improvements:

- There is not as much error handling as I would have liked in the project, in the routers folder
there is an example of my original fetch call which is far more thorough than the one eventually
implemented, however I prioritised testing and making sure the logic was correct rather than
using this over the simpler version
- The logic is far from optimised. I noticed a lot of overlap in the two sets of logic found in the
functions folder. Ideally I would have been able to rename the 'timeCategoryAppears' and 'timeDateAppears'
under one function and called it for both category and cashflow, as well as streamline the other functions
in a similar way, however unfortunately I did not have time to do so.

**Time and Space complexity**
- I could have also improved on speed complexity by mapping variables rather than pushing to empty arrays.


------------------------

## The Project:

**Libraries used:**

Jest - For testing I used jest rather than the pre installed testing suite as i'm more familiar with it
Node-fetch - For obvious reasons this was required to get fetch the data from the API
Nodemon - I use nodemon on all of my node project to remove the need to restart the server

npm install --save-dev jest
npm install node-fetch
npm install nodemon (with -g flag for all projects)



<!-- # Insights Service

As part of out latest MVP build we need to present a user with some insights about their spending. We need to build a server that returns JSON formatted insights. A list of transactions for a user can be retrieved at `GET http://54.154.227.172:3000/transactions`. The server should fetch this list, then calculate the insights below, and return them in the body of the response with a 200 response code.

The api returns an array of transactions:

```json
[
  {
    "id": 1,
    "amount": 100,
    "merchant": "Tescos Ltd",
    "category": "food",
    "paymentDate": "2019-01-27T14:24:48.960Z"
  },
  {
    "id": 2,
    "amount": 20,
    "merchant": "TFL London",
    "category": "transport",
    "paymentDate": "2019-02-27T14:24:48.960Z"
  }
]
```

From this list we'll need to build a server that exposes the following routes, which calculate different insights about a users spending depending on which route is called:

1. `GET /insights/categories`

User Story:
```
As a User
So that I can gain an understanding of my finances
I want to see an aggregated list of my transactions by category
```


returns the number, total and average value of all transactions grouped by the transaction category.

```json
{
  "food": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  },
  ...
}
```

2. `GET /insights/cashflow`

User Story:
```
As a User
So that I can gain an understanding of if i will run out of money
I want to see a breakdown of my spending by month
```

returns a daily cashflow of all transactions grouped by day. For days on which there is no data return 0 for all fields.

```json
{
  "01/01/2019": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  },
  "02/01/2019": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  },
  "03/01/2019": {
    "totalNumber": 0,
    "totalValue": 0,
    "averageValue": 0
  },
}
```

## To Get Started

1. `git clone https://github.com/jigsaw-tech/recruitment.git`
2. `npm i`
3. `npm t`

## Some notes

1. all values are integer. Don't worry about dealing with floating point precisions, the front end can deal with the presentation logic.
2. you can use any npm package you like, but only with good reason! This includes the testing framework which you can change :)
3. We've provided some boilerplate code, but feel free to rearrange as you want...
4. There's a little test script we've written which will start the server, run the tests and pull it down again. But feel free to orchastrate your tests however you want!

## Things we value

1. Well tested code. Whatever framework you use, we like testing our code to have certainty it works
2. Simple code. It shouldn't take a PHD to understand code. If it's that complicated, we've done something wrong.
3. Code reuse. If there's an option to reuse some code, go for it! -->
