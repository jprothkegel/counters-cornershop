# Cornershop Frontend Test

## Stack
----
For this test I used these important dependencies:
* React
* React-Router-Dom
* Material UI
* Axios
* PropTypes
* Redux with Toolkit
* Cypress
* Eslint
* Prettier
* Husky

## Architecural Choices
---
The main folders inside /src are:

* `cypress-tests`
* `components`
* `constants`
* `helpers`
* `redux`
* `services`
* `theme`
* `views`

### Explanation
* `cypress-tests`: This application use behavioural tests to simulate all the features, so in this folder are all the files needed to run the tests with Cypress.
* `components`: This folder holds all the reusable components throughout the application. This follows the idea of flat architecture and descriptive names to be easy to navigate and find the components. It also follows [AirBnb](https://airbnb.io/javascript/react/#naming) naming convention.

* `constants`: This folder holds constants to use throughout the application, like the routes or the examples.
* `helpers`: Here are helper functions, that for example formats some text.
* `redux`: The redux folder has subfolders differentiating tasks:
  * `actions`: Here are the functions that triggers actions to change the state.
  * `reducers`: Here is the main reducer that combine the reducers that are returned from the different slices.
  * `slices`: The [slices](https://redux-toolkit.js.org/api/createSlice) are functions that accepts initial state, reducers and a name. These generates automatically action creators and action types to reduce verbosing.
  * `store`: Here is the store.
* `services`: This folder holds the functions that communicate with the BFF, that makes the http requests.
* `theme`: Here is the theme from Material UI.
* `views`: This folder is where the things we see are saved. This follow the [AirBnb](https://airbnb.io/javascript/react/#naming) naming convention too. This has sub-folders too for the Counters view in particular:
 * `components`: This holds components that are unique to the view.
 * `layout`: Here is we play with the different components, composing the different parts from the view.

 ## How to run the app
 ---
 First of all is important to install all the dependencies used in this application, so in the root folder run:
 * `npm install`

 Then run the application with the following command in the root folder:
 * `npm start`

## How to run the tests
---
First of all is needed to go to the test folder, from the app root folder run:
* `cd cypress-tests`  

Then in the cypress folder is also needed to install the dependencies with:
  * `npm install` 

To run the tests, there are two ways:
  * `npm run cypress:open`: this will deploy a chrome window, where tests can be runned.
  * `npm run cypress:run`: this runs the test on the terminal.

# Juan Pablo Rothkegel Ide
