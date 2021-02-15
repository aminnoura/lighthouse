import React, { FC, ReactElement } from 'react';
import './ApplicationInfo.scss';
import mobile1 from "../../images/applicationInfo/img01.png";
import mobile2 from "../../images/applicationInfo/img02.png";
import mobile3 from "../../images/applicationInfo/img03.png";
import gPlay from "../../images/applicationInfo/google-play-badge.png";
import aStore from "../../images/applicationInfo/apple-store-badge.svg";

type Props = {
};

const ApplicationInfo: FC<Props> = () : ReactElement  => {
    return (
        <div className="applicationInfoContainer">
            <h2 className="h2"> 2025 CHEMNITZ Mobile App</h2>
            <p className="paragraph"> Chemnitz is the European Capital of Culture 2025. Here you can find our mobile application regards of this City. </p>
            <div className="imgContainer"> 
                <img className="imgMobile" src={mobile1} alt="Application"/>
                <img className="imgMobile" src={mobile2} alt="Application"/>
                <img className="imgMobile" src={mobile3} alt="Application"/>
            </div>
            <button className="btn"> Download Directly</button>
            <h6 className="h6"> Or Download From: </h6>

            <div className="storeImg">
                <a href="https://play.google.com/store/apps/details?id=com.chemnitz2025"> <img className="appStoreImage" src={aStore} alt="App Store"/> </a>
                <a href="https://play.google.com/store/apps/details?id=com.chemnitz2025"> <img className="appStoreImage" src={gPlay} alt="App Store"/> </a>
            </div>
        </div>
    )
}

export default ApplicationInfo;