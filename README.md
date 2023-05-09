# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


#Application design
Components
    1.Login Component:-This component is responsible for Login Activity
    2. Register Component:- This Component will register User
    3. Home Component:- This component is like Landing Page which conatins newses
    4. Header Component:- This component contain a search icon for news search and newYorktimes logo
    5. NewsCard:- This Component contain All the info regarding particular news
    6. NewsDetail:- This component contain details about the news
    7. NewsSearch Component:- this component a searchBox for searching the news based on user
    8. SearchHistory Component:- This component Store last search by user

Tools:
    Working with Redux Toolkit, RTK Query, and RTK Mutation
    Redux Toolkit is a powerful library that makes it easier to work with Redux. It includes several utilities that help reduce boilerplate code and simplify common Redux use cases.

    Two of the most useful utilities provided by Redux Toolkit are RTK Query and RTK Mutation. RTK Query is a data fetching and caching library that helps simplify the process of querying APIs. RTK Mutation is a library that simplifies the process of making updates to the server using a Redux-style API.  



#Authentication

The application uses JWT authentication to allow users to log in and view news articles. When a user logs in, a JWT token is returned from the server and stored in the Redux store using RTK Query. This token is then included in the headers of all subsequent requests to the API.

To implement authentication, we use the createApi function provided by RTK Query. This function allows us to define our API endpoints and set up authentication using a bearer token

#Login
To implement login functionality, we use the createAsyncThunk function provided by Redux Toolkit. This function allows us to define an asynchronous action that can dispatch other actions as needed.

#Constant
It contain Constant which are used in this project 



