import React, { useEffect, useState } from "react";
import './css/Facebook.css'

const Facelogy = (props) => {
  const [data, setData] = useState()
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: props.appId,
        cookie: false,
        xfbml: true,
        version: "v16.0",
      });
      window.FB.AppEvents.logPageView();
      window.FB.getLoginStatus(function (response) {
        if (response.status === "connected") {
          props.onLoginSuccess(response.authResponse);
        }
      });
    };

    (function (d, s, id) {
      var js,fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [props.appId, props.onLoginSuccess, props.onLoginFailure]);


  const callApi = (status, res) => {
    const token = res.accessToken
    const stoken = localStorage.getItem('accessToken');
    if(!stoken){
      props.onLoginFailure('User not logged in');
      return;
    }

    if(stoken !== token){
      localStorage.removeItem('accessToken');
      props.onLoginFailure('User access token expired or invalidated');
      return;
    }

    if(stoken) {
      localStorage.removeItem('accessToken');
      localStorage.clear();
    }
    localStorage.setItem('accessToken', token)
    // const token = res.accessToken
    const endpoint = "/me";
    const method = "GET";
    const params = {locale: 'en_US', fields: "id,first_name,last_name,email,picture", access_token: localStorage.getItem('accessToken')};

    window.FB.api(endpoint,method,params,
        function(response) {
        if (props.localStorage) {
            localStorage.setItem('user', JSON.stringify(response));
        }
        if (props.handleResponse) {
            props.handleResponse(response);
        }
        if (props.briefConsoleLog) {
            console.log("ID: " + response.id);
            console.log('First Name: ' + response.first_name);
            console.log('Last Name: ' + response.last_name);
            console.log("Email: " + response.email);
            console.log("Image URL: " + JSON.stringify(response.picture));
        }
        props.onLoginSuccess(response, status);
        // console.log(response);
       });   
}



  const handleLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          callApi(response.status, response.authResponse)
        } else {
          props.onLoginFailure(response.status);
        }
      },
      { scope: "public_profile,email" }
    );
 
  };


  return (
    <button className="fbtn" onClick={handleLogin}>Login with Facebook</button>
  );
};

export default Facelogy;
