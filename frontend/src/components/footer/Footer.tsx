import React, { useEffect, useState } from "react";
import './Footer.scss';
import { useHistory } from "react-router-dom";
import FooterLinkSection from "../footerLinkSection/FooterLinkSection";
import { dublinLinks, popularLinks, quickLinks } from "./footerVariables";
import chemnitzUni from "../../images/logo/chemnitzUni.png";
import chemnitz2025 from "../../images/logo/2025chemnitz.png";

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
                {isHome && <div className="mainFooterSectionContainer">
                    <div className="footerNewsletter"> 
                        <h4>Newsletter From</h4>
                        <form className="footerNewsletterForm">
                        <input className="footerNewsletterInput" type="text" />
                        <input className="footerNewsletterInput" type="email"/>
                        <input className="footerNewsletterSubmit" type="submit"/>
                        
                        </form>
                    </div>
                    <div className="footerSocial">
                        Social
                    </div>
                </div>}
                <div className="mainFooterSectionContainer">
                    <div className="mainFooterUrl">
                        <div className="footerImageContainer mainFooterUrlInternal"> 
                            <img className="footerImage" src={chemnitzUni} alt="Chemnitz University"/>
                            <img className="footerImage" src={chemnitz2025} alt="2025Chemnitz"/>
                        </div>
                        <div className="mainFooterUrlInternal footerUrlLeftRightContainer"> 
                            <FooterLinkSection className={'footerLinkSection'} links = {dublinLinks} title = "Dublin"/>
                            <FooterLinkSection className={'footerLinkSection'} links = {dublinLinks} title = "Cork"/>
                            <FooterLinkSection className={'footerLinkSection'} links = {dublinLinks} title = "Limerick"/>
                        </div>
                    </div>
                    <div className="mainFooterUrl">
                        <div className="mainFooterUrlInternal footerUrlRightLeftContainer"> 
                            <FooterLinkSection className={'footerLinkSection'} links = {popularLinks} title = "Popular"/>
                        </div>
                        <div className="mainFooterUrlInternal footerUrlRightRightContainer">
                            <FooterLinkSection className={'footerLinkSection'} links = {quickLinks} title = "Quick Links"/>
                        </div>
                    </div>

                </div>
                <div className="mainFooterSectionContainer">
                    <div className="footerBottomSection"> urls</div>
                    <div className="footerBottomSection">copyright</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;