import React, { FC, ReactElement, useEffect, useState } from 'react';
import './ApplicationInfo.scss';
import mobile1 from "../../images/applicationInfo/img01.png";
import mobile2 from "../../images/applicationInfo/img02.png";
import mobile3 from "../../images/applicationInfo/img03.png";
import gPlay from "../../images/applicationInfo/google-play-badge.png";
import aStore from "../../images/applicationInfo/apple-store-badge.svg";

type Props = {
};

const ApplicationInfo: FC<Props> = () : ReactElement  => {
    // const [display, setDisplay] = useState<number>(5);
    // const [limit, setLimit] = useState<boolean> (false);
    // useEffect(() => {
    //     setLimit (true); 
    // }, []);
    // useEffect(()=>{
    //     console.log('test');
    // },[])
    return (
        <div className="applicationInfoContainer">
            <h2 className="h2"> Download 2025 CHEMNITZ Application!</h2>
            <p className="paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
            <div className="imgContainer"> 
                <img className="imgMobile" src={mobile1} alt="Application Image"/>
                <img className="imgMobile" src={mobile2} alt="Application Image"/>
                <img className="imgMobile" src={mobile3} alt="Application Image"/>
            </div>
            <button className="btn"> Download Directly</button>
            <h6 className="h6"> Or Download From: </h6>

            <div className="storeImg">
                <a href="#"> <img className="aImg" src={aStore} alt="App Store"/> </a>
                <a href="#"> <img className="gImg" src={gPlay} alt="App Store"/> </a>
            </div>
        </div>
    )
}

export default ApplicationInfo;