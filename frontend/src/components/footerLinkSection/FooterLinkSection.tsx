import React, { FC, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { dublinLinkType, FOOTER_ENUM, generalLinksType} from '../../types/FooterTypes';
import './FooterLinkSection.scss';

type Props = {
    links: dublinLinkType[] | generalLinksType [],
    title?: string,
    className?: string,
};

const FooterLinkSection: FC<Props> = ( { links , title , className } ) : ReactElement  => {
    return (
        <div className={className} >
            <h3> {title} </h3>
            <ul>
            {
                (links as any[]).map((link , index )=>{
                    if(link.type === FOOTER_ENUM.FOOTER_URL){
                        return <li key={index} className= {link.className}><Link to={link.url}> {link.name} </Link></li>
                    }
                    else if(link.type === FOOTER_ENUM.FOOTER_PHONE){
                        return <li key={index} className= {link.className}><a href={"tel: "+ link.phone}> {link.phone} </a></li>
                    }
                    else if (link.type === FOOTER_ENUM.FOOTER_EMAIL){
                        return <li key={index} className= {link.className}><a href={"mailto: "+ link.email}> {link.email} </a></li>
                    }
                    else {
                        return <h3>ERROR</h3>
                    }
                })
            }
            </ul>
        </div>
        )
}

export default FooterLinkSection;