import { Redirect, Route, Switch } from "react-router";
import React, { ReactNode } from "react";
import HomePage from "../containers/HomePage";
import Login from "../containers/Login";
import Profile from "../privateContainers/profile";


const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>
        </Switch>
    )
}

interface PrivateRouteProps {
    children: ReactNode;
    path: string;
}


function PrivateRoute({ children , ...rest }: PrivateRouteProps) {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default Routes;