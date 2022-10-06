import React, { createContext } from "react";
import { render } from 'react-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import MyProvider from './context/provider'


render(
                <MyProvider >
                        <App />
                </MyProvider>,
        document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


