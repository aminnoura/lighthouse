import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./utils/router";
import './App.scss';
import Footer from "./components/Footer/Footer"; 

const App = () => (
    <div className="main" >
        <BrowserRouter>
            <Header />
            <div className="appContainer">
                <Routes/>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
);

export default App;



