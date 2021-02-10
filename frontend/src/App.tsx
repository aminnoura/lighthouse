import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/router";

const App = () => (
        <BrowserRouter>
            <div className="App">
                <main className="App_content">
                    <Routes/>
                </main>
            </div>
        </BrowserRouter>
    );

export default App;



