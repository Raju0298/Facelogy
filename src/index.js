import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import FbLogin from './Facelogy';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'
import App from './App';
// export {default as FbLogin} from "./Components/Facebook"

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const appId=""
// const redirect=""
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <div>
//       <Routes>
//           <Route exact path="/" element={<FbLogin appId="1129719461759606" redirect="/"/>}/>
//       </Routes>
//       </div>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default FbLogin;
