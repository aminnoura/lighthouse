import React, { FC, ReactElement } from 'react';
import './TeamMembers.scss';
import teamMember1 from "../../images/teamMembers/teamMember1.png";
import teamMember2 from "../../images/teamMembers/teamMember2.png";
import teamMember3 from "../../images/teamMembers/teamMember3.png";
import SingleMember from './SingleMember';
type teamMemberListType={
	name:string,
	image:string,
	position:string,
	fbUrl:string,
	twUrl:string,
	piUrl:string
}
const teamMemberList:teamMemberListType[]=[
	{
		name:"member1",
		image:teamMember1,
		position:"manager",
		fbUrl:"#",
		twUrl:"#",
		piUrl:"#"
	},
	{
		name:"member2",
		image:teamMember2,
		position:"manager",
		fbUrl:"#",
		twUrl:"#",
		piUrl:"#"
	},
	{
		name:"member3",
		image:teamMember3,
		position:"manager",
		fbUrl:"#",
		twUrl:"#",
		piUrl:"#"
	}
]
const TeamMembers: FC = () : ReactElement  => {
	return (      
    <div className="teamMembersContainer">
        <h2>Team Awesome</h2> 
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