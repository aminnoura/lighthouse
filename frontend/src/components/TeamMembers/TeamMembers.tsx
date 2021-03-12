import React, { FC, ReactElement } from 'react';
import './TeamMembers.scss';
import amninnoura from "../../images/teamMembers/aminnoura3.png";
import teamMember1 from "../../images/teamMembers/teamMember1.png";
import SingleMember from './SingleMember';
type teamMemberListType={
	name:string,
	image:string,
	position:string,
	fbUrl:string,
	twUrl:string,
	liUrl:string,
	inUrl:string
}
const teamMemberList:teamMemberListType[]=[
	{
		name:"Amin Noura",
		image:amninnoura,
		position:"Head of the team",
		fbUrl:"https://www.facebook.com/aminnoura",
		twUrl:"https://twitter.com/AminNoura_en",
		inUrl:"https://www.instagram.com/aminnoura/",
		liUrl:"https://www.linkedin.com/in/aminnoura/"
	},
	{
		name:"Erfan Safaei",
		image:teamMember1,
		position:"intern",
		fbUrl:"#",
		twUrl:"#",
		inUrl:"#",
		liUrl:"#"
	},
	{
		name:"Maziar Rumiani",
		image:teamMember1,
		position:"intern",
		fbUrl:"#",
		twUrl:"#",
		inUrl:"#",
		liUrl:"#"
	}
]
const TeamMembers: FC = () : ReactElement  => {
	return (      
    <div className="teamMembersContainer">
        <h2>Our Team</h2> 
		<div className="teamMembers"> 
			{ 
				teamMemberList.map( (teamMember,index) => 
				 	<SingleMember key={index} {...teamMember} />
				)
				}
		</div>
	</div>         
)}

export default TeamMembers;