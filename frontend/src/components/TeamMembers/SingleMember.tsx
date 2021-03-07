import React, { FC } from 'react';
import facebookLogo from "../../images/footerLogos/social/facebook.png";
import twitterLogo from "../../images/footerLogos/social/twitter.png";
import instagramLogo from "../../images/footerLogos/social/instagram.png";
import linkedinLogo from "../../images/footerLogos/social/linkedin.png";

type teamMemberListType={
	name:string,
	image:string,
	position:string,
	fbUrl:string,
	twUrl:string,
	liUrl:string,
	inUrl:string
}
const SingleMember: FC<teamMemberListType>  = ( { name, image, position, fbUrl, twUrl, liUrl, inUrl } )  => {  
    return (
        <div className="eachTeamMember"> <img  className="userImage" src={image} alt="teamMember1"/>
            <h3 className="teamMemberName">{name}</h3>
            <p className="teamMemberPosition">{position}</p>
            <div className="shortLine">
            </div> 
            <div className="icons">                          
                <a rel="noopener noreferrer" href={fbUrl} target="_blank"><img className="socialLogo" src={facebookLogo} alt="FaceBook"/></a>
                <a rel="noopener noreferrer" href={twUrl} target="_blank"><img className="socialLogo" src={twitterLogo} alt="FaceBook"/></a>
                <a rel="noopener noreferrer" href={liUrl} target="_blank"><img className="socialLogo" src={linkedinLogo} alt="FaceBook"/></a>
                <a rel="noopener noreferrer" href={inUrl} target="_blank"><img className="socialLogo" src={instagramLogo} alt="FaceBook"/></a>
            </div>
        </div>                
    )
}

export default SingleMember;