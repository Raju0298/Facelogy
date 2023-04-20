# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


##  Install

Install package using 

```
npm install facelogy
or 
npm install --save facelogy 
```

Once Installed import the package using 

### ` import Facelogy from 'facelogy' `

### Props to be passed

Once imported use the package by providing it with 
1. `AppID` ( that is provided from developers.meta.com you have to login and get the AppID ) this is `mandatory` 
2. Two Callbacks that are `onLoginSuccess` and `onLoginFailure` these are `not mandatory` but they are the ones 
that actually retreives data or shows error if something goes wrong.
3. There are some smaller props that are `not mandatory` such as : 
        i. localStorage : That sets the userData in localstorage for you using `user` as the key you can retrieve it
                              by localStorage.getItem('user')

        ii. briefConsoleLog : This will display userData in console in a systematic form please try it out.
        iii. handleResponse : A callback to get userData as response
        iv. Eg. 
        ```
              <Facebook 
                  appId='eg. 1234567532356445' 
                  onLoginSuccess={handleSuccess} 
                  onLoginFailure={handleFailure} 
                  localStorage 
                  briefConsoleLog 
                  handleResponse={handleCallback} 
              /> 
        ```

### Usage

```

import React from 'react';
import Facelogy from 'facelogy'


// onLoginSuccess return 2 parameters response and the status .
/  The `response` is the userdata and 
// The `status` specifies whether you are connected or not that is it
// return connected once successful login is done

const handleLoginSuccess = (response, status) =>{
  //Fyii here you can also handle routing using useNavigate
  console.log(response)
}


//onLoginFailure returns an error response if something goes wrong

const handleLoginFailure = (err) => {
  console.log(err)
}

const Example = () => {
  return (
<Facelogy 
    appId="your appId here in String format(eg. '45678987654587654')" 
    onLoginSuccess={handleLoginSuccess} 
    onLoginFailure={handleLoginFailure}
/>
  )
}
export default Example

```

### Note: Essential Things To Remember 


1. Create a .env file in your root project that is alongside src folder not within it and store in it  ` HTTPS=true ` 
and save it, as facebook SDK now only works on https
2. You have to create a developer.facebook account and create a project to get AppID and also check ` Yes ` on 
' Login with Javascript SDK ' by going to 
Facebook Login ( On the Sidebar from the bottom ) ==> Settings ==> Login with Javascript SDK 
also you have to put in allowed  domains for eg I added ` https://localhost:3000/ ` while in development 
you need to add your own it is recommended to allow specific domains only



## Thats All!  Cheers!!!

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
