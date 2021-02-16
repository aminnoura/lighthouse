import React, { useEffect, useState } from "react";
import './Footer.scss';
import { useHistory } from "react-router-dom";
import FooterLinkSection from "../footerLinkSection/FooterLinkSection";
import { dublinLinks, popularLinks } from "./footerVariables";

const Footer = () => {
    const history = useHistory();
    const [isHome,setIsHome] = useState<boolean> (false);
    useEffect(() => {
        setIsHome (history.location.pathname === '/');
        return history.listen(() => { 
            setIsHome (history.location.pathname === '/');
        })
    },[history])
    return (
        <div className="generalContainer1 footerContainer1" >
            <div className="generalContainer2 footerContainer2">
                <div className="mainFooterSectionContainer">
                    <div className="footerNewsletter"> 
                        Newsletter
                    </div>
                    <div className="footerSocial">
                        Social
                    </div>
                </div>
                <div className="mainFooterSectionContainer">
                    <div className="mainFooterUrl">
                        <div className="footerImageContainer"> Images</div>
                        <div className="footerUrlLeftRightContainer"> 
                        3 footer link section
                        </div>
                    </div>
                    <div className="mainFooterUrl">
                        <div className="footerUrlRightLeftContainer"> urls</div>
                        <div className="footerUrlRightRightContainer">copyright</div>
                    </div>

                </div>
                <div className="mainFooterSectionContainer">
                    <div className="footerBottomSection"> urls</div>
                    <div className="footerBottomSection">copyright</div>
                </div>
                {/* <FooterLinkSection links = {dublinLinks} title = "Dublin"/>
                <FooterLinkSection links = {popularLinks} title = "Popular"/> */}
            </div>
        </div>
    );
}

export default Footer;