import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* Removed from the package.json file

    "start": "react-scripts start",
    "build": "react-scripts build",
    
For additions, see https://github.com/GetStream/Stream-Example-Create-React-App/blob/master/package.json
https://stackoverflow.com/questions/50722133/what-exactly-is-the-react-scripts-start-command
    
    */