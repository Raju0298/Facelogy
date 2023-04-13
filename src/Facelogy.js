import React, { useContext } from 'react'
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './css/Facebook.css'


const mystyle= {
  "background-color": "#3B5998",
  "color": "white",
  "margin-top": "10px",
  "padding": "10px",
  "border": "3px solid white",
  "border-radius": "10px",
  "width": "350px",
  "display": "flex",
  "align-items": "center",
  "justify-content": "center"
}



const Facelogy = (props) => {
    
    // const navigate = useNavigate()
    // const [data, setData] = useState({})
    useEffect(() => {
        // const fbid = process.env.REACT_APP_FACEBOOKID
        const fbid = props.appId
        window.fbAsyncInit = function() {
            window.fbLoaded = true
            window.FB.init({
                appId: fbid,
                cookie: false, // Enable cookies to allow the server to access the session.
                xfbml: true, // Parse social plugins on this webpage.
                version: "v16.0", // Use this Graph API version for this call.
              });

            window.FB.AppEvents.logPageView();
          };
        
        

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));                    
    }, [])

    
    
    const handleClick = () => { 
        // console.log("HEre")
        window.FB.login(function(response) {
            if (response.authResponse) {
            // var access_token =   window.FB.getAuthResponse()['accessToken'];

            window.FB.getLoginStatus(function(response){
                if(response.status==='connected'){
                    console.log('Login authenticated');
                }else{
                    console.log('not authenticated');
                }
            })
            console.log('Welcome!  Fetching your information.... ');
            callApi()
            setTimeout(() => {
                // navigate(props.redirect)
                window.location.href = props.redirect
            }, 1000);
        } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
    }

    // const {data, setData} = useContext(ResponseContext)
    
    const callApi = () => {
          window.FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,picture'},
              function(response) {
              //  setData(response)
               localStorage.setItem("data", response)
               console.log(response);
             });   
    }

  return (
    <div>
      <button className="fbtn" onClick={handleClick}>Login</button>
    </div>
  )
}

export default Facelogy;