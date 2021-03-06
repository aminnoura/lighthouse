import React, { FC, ReactElement, useEffect, useState } from 'react';
import './slideShow.scss';


type propsType = {
    imageList:string[]

};

const SlideShow: FC<propsType> = ({imageList}) : ReactElement  => {
    const [display, setDisplay] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplay( prev => {
                return prev>=5?0:prev+1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshowContainer">
           { imageList.map((image,index) => {
                return (
                    <img key={index} className={`slideshowImage ${display===index?"display":""}`} src={image} alt="chemnitz" />
                )
            } ) }
       </div>
    )
}

export default SlideShow;