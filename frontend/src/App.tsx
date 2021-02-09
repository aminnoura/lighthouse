import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";

const App = () => (
        <BrowserRouter>
            <div className="App">
                <main className="App_content">
                    <Switch>
                        <Route path="/" exact>
                            {() => (
                                <HomePage/>
                            )}
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );

export default App;



