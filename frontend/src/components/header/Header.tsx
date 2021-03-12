import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import './Header.scss';
import { useHistory } from "react-router-dom";
import { isAuth } from "../../utils/helper";
import { LOGOUT_MUTATION } from "../../graphql/types";
import { useMutation } from "@apollo/client";
import Menu from '../Menu/Menu';

const Header = () => {
    const [authenticated,setAuthenticated] = useState<boolean>(false);
    const history = useHistory();
    const [logoutMutation] = useMutation(LOGOUT_MUTATION);
    const handleLogout = (): void => {
        
        logoutMutation()
        .catch(err=>{
            console.log(err);
        });

        localStorage.removeItem('token');
        alert('logged out successfully.')
        history.push('/');
    }

    useEffect(() => {
        let auth:boolean = isAuth();
        setAuthenticated(auth);
        return history.listen(() => { 
            let auth = isAuth();
            setAuthenticated(auth);
        })
    },[history])
    return (
        <div className="generalContainer1 headerContainer1" >
            <div className="generalContainer2 headerContainer2">
                <h1><a href="/">2025 CHEMNITZ</a></h1>
                <Menu/>
                {authenticated && <Button disable={false} className="lightGreenBtn" onClick={handleLogout} text="Logout" />}
                {!authenticated && <Button disable={false} className="lightGreenBtn" onClick={()=>{history.push('/login')}} text="Login" />}
            </div>
        </div>
    );
}

export default Header;