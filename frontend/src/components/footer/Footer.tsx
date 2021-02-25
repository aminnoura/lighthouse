import React, { useEffect, useState } from "react";
import './Footer.scss';
import { useHistory } from "react-router-dom";
import FooterLinkSection from "../footerLinkSection/FooterLinkSection";
import { dublinLinks, popularLinks, quickLinks } from "./footerVariables";

import chemnitzUni from "../../images/footerLogos/chemnitzUni.png";
import chemnitz2025 from "../../images/footerLogos/2025chemnitz.png";
import facebookLogo from "../../images/footerLogos/social/facebook.png";
import twitterLogo from "../../images/footerLogos/social/twitter.png";
import instagramLogo from "../../images/footerLogos/social/instagram.png";
import youtubeLogo from "../../images/footerLogos/social/youtube.png";
import linkedinLogo from "../../images/footerLogos/social/linkedin.png";

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
                        <form className="footerNewsletterForm">
                            <h4>Newsletter Form</h4>
                            <input className="footerNewsletterInput" type="text" placeholder="Name*"/>
                            <input className="footerNewsletterInput" type="email" placeholder="Email*"/>
                            <input className="footerNewsletterSubmit" type="submit"/>
                        
                        </form>
                    </div>
                    <div className="footerSocial">
                        <a className="footerSocialLogo" href="#"> <img className="fbLogo" src={facebookLogo} alt="FaceBook"/> </a>
                        <a className="footerSocialLogo" href="#"> <img src={twitterLogo} alt="FaceBook"/> </a>
                        <a className="footerSocialLogo" href="#"> <img src={instagramLogo} alt="FaceBook"/> </a>
                        <a className="footerSocialLogo" href="#"> <img src={youtubeLogo} alt="FaceBook"/> </a>
                        <a className="footerSocialLogo" href="#"> <img src={linkedinLogo} alt="FaceBook"/> </a>
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