import React, { FC, ReactElement, useEffect, useState } from 'react';
import './ApplicationInfo.scss';


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
            Salaam
        </div>
    )
}

export default ApplicationInfo;