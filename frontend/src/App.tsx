import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/header/Header";
import Routes from "./utils/router";
import './App.scss';

const App = () => (
    <div className="main" >
        <HeaderComponent />
        <BrowserRouter>
            <div className="appContainer">
                <Routes/>
            </div>
        </BrowserRouter>
    </div>
);

export default App;



