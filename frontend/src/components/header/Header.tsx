import React from "react";
import Button from "./button/Button";
import './HeaderComponent.scss';

const HeaderComponent = () => (
    <div className="generalContainer1 headerContainer1" >
        <div className="generalContainer2 headerContainer2">
            <h1>2025 CHEMNITZ</h1>
            <Button className="languageBtn" onClick={()=>{console.log('clicked')}} text="Language Button" />
        </div>
    </div>
);

export default HeaderComponent;