import React, { FC } from 'react';
type teamMemberListType={
	name:string,
	image:string,
	position:string,
	fbUrl:string,
	twUrl:string,
	piUrl:string
}
const SingleMember: FC<teamMemberListType>  = ( { name, image, position, fbUrl, twUrl, piUrl } )  => {  
    return (
        
        <div className="eachTeamMember"> <img src={image} alt="teamMember1"/>
            <h3 className="teamMemberName">{name}</h3>
            <p className="teamMemberPosition">{position}</p>
            <div className="shortLine">
            </div> 
            <div className="icons">                          
                <a rel="noopener noreferrer" href={fbUrl} target="_blank"><i>F</i></a>
                <a rel="noopener noreferrer" href={twUrl} target="_blank"><i>T</i></a>
                <a rel="noopener noreferrer" href={piUrl} target="_blank"><i>P</i></a>
            </div>
        </div>                
    )
}

export default SingleMember;