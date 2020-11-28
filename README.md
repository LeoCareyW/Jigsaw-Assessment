------------------------
## Important: The server running at  http://54.154.227.172:3000/transactions appears to now be offline,
therefore the project cannot retreive that data.


**Hi Team**,

Thanks for the challenge today, it was tricky, and I didn't manage to complete it to the level
that I would have liked, however I was able to get a satisfactory result. I have detailed the project
and the issues down below, as well as the various libraries I used and why.


## Requirements:
1. The server should fetch the data list at /insights
**Result:** Success

2. The user can go to /categories and see a breakdown of spending by category
**Result:** Partial success - Visually this aspect works, however it is *not* returned
as a JSON, this makes any manipulation of the data less seamless

3. The user can go to /cashflow and see a breakdown of spending by date
**Result:** Partial Success - If there is no spending on a given date, the date does not show.
Also, as above, the response is not JSON formatted

4. Include a test suite so that the app can be scaled and reformatted with greater ease
**Result:** Success, however ideally I would have preferred to test more thoroughly such as
the API call and the response.status for all the common responses

## Failures:

- The incorrect format for the response was my biggest dissapointment with this project as it
fundamentally affects its usefulness of the API server.
- As mentioned, the dates where there are no spending do not show, with more time, I would have
got the 'smallest' and 'largest' date and made a secondary array which had all dates between
these two. I would have then seen if they were included in the original array, if they were, return the data
from the original array, if not, return all 0's

## Improvements:

- There is not as much error handling as I would have liked in the project, in the routers folder
there is an example of my original fetch call which is far more thorough than the one eventually
implemented, however I prioritised testing and making sure the logic was correct rather than
using this over the simpler version
- The logic is far from optimised. I noticed a lot of overlap in the two sets of logic found in the
functions folder. Ideally I would have been able to rename the 'timeCategoryAppears' and 'timeDateAppears'
under one function and called it for both category and cashflow, as well as streamline the other functions
in a similar way, however unfortunately I did not have time to do so.


## Logic:

- For the /categories and /cashflow I performed a very basic set of functions. I firstly iterated through the
categories/ paymentDate so that I had an array of each unique one.
- I then filtered the original data against this array in order to get an array or arrays, each inner array
linked to an expense with the relevant paymentDate or category
- With this information I could easily total the *number* of expenses for any given category/paymentDate and the *total
value*. With this information I could easily work out the average. These were put into an object.
- With paymentDate there was an extra step here to reformat the date, this was not done optimally, and used a simple slice
method as the original formatting although incorrect, was consistent
- I then added the relevant titles of either category or date to the object which was created and formatted it as close as
possible to JSON.

**Time and Space complexity**
- I could have also improved on speed complexity by mapping variables rather than pushing to empty arrays for example.
- Time could also have been improved by not using built in functions

------------------------

## The Project:

**Libraries used:**

Jest - For testing I used jest rather than the pre installed testing suite as I'm more familiar with it
Node-fetch - For obvious reasons this was required to get fetch the data from the API
Nodemon - I use nodemon on all of my node project to remove the need to restart the server

'npm install --save-dev jest'
'npm install node-fetch'
'npm install nodemon' (with -g flag for all projects)

After installing these, open the project and in the terminal, in the correct folder, run

`nodemon src/index.js`

Then go to 'http://localhost:3000/insights/' to view the full list of data

To see data formatted by category, go to 'http://localhost:3000/insights/categories'

To see data formatted by day, go to 'http://localhost:3000/insights/cashflow'

To test run 'npm test'

------------------------

Thanks,

Leo Carey-Williams
