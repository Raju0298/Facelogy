import { createContext, useState } from 'react';
// import Facebook from './Components/Facelogy';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FbLogin from './Facelogy';

export const ResponseContext = createContext(null)
const App = (props) => {
const [data, setData] = useState({})
const appId=props.appId
const redirect=props.redirect
  return (
    <div className="App">
      <ResponseContext.Provider value={{data,setData}}>
      <BrowserRouter>
      <div>
      <Routes>
          {/* <Route exact path="/" element={<Facebook appId={process.env.REACT_APP_FACEBOOKID} redirect="/"/>}/> */}
          <Route exact path="/" element={<FbLogin appId={appId} redirect={redirect}/>}/>

      </Routes>
      </div>
          
      </BrowserRouter>
      </ResponseContext.Provider>
    </div>
  );
}

export default App;
