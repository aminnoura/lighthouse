import React, { FC, ReactElement, useEffect, useState } from 'react';
import './slideShow.scss';
import schlossteich from "../../images/chemnitz/schlossteich.jpg";
import bahnhof from "../../images/chemnitz/bahnhof.jpg";
import center1 from "../../images/chemnitz/center1.jpg";
import Johannisplatz from "../../images/chemnitz/Johannisplatz.jpg";
import marx from "../../images/chemnitz/marx.jpg";
import theater from "../../images/chemnitz/theater.jpg";

type Props = {};

const SlideShow: FC<Props> = () : ReactElement  => {
    const [display, setDisplay] = useState<number>(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplay( prev => {
                return prev>=6?1:prev+1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshowContainer">
            <img className={`slideshowImage ${display===1?"display":""}`} src={schlossteich} alt="chemnitz" />
            <img className={`slideshowImage ${display===2?"display":""}`} src={bahnhof} alt="chemnitz" />
            <img className={`slideshowImage ${display===3?"display":""}`} src={center1} alt="chemnitz" />
            <img className={`slideshowImage ${display===4?"display":""}`} src={Johannisplatz} alt="chemnitz" />
            <img className={`slideshowImage ${display===5?"display":""}`} src={marx} alt="chemnitz" />
            <img className={`slideshowImage ${display===6?"display":""}`} src={theater} alt="chemnitz" />
        </div>
    )
}

export default SlideShow;