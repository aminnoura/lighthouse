import React from "react";
import Button from "../button/Button";
import './Header.scss';
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <div className="generalContainer1 headerContainer1" >
            <div className="generalContainer2 headerContainer2">
                <h1>2025 CHEMNITZ</h1>
                <Button disable={false} className="lightGreenBtn" onClick={()=>{history.push('/login')}} text="Login" />
            </div>
        </div>
    );
}

export default Header;