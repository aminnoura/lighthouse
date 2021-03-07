import React, { FC, ReactElement } from "react";
import ApplicationInfo from "../../components/ApplicationInfo/ApplicationInfo";
import SlideShow from "../../components/slideShow/SlideShow";
import "./Home.scss";
import schlossteich from "../../images/chemnitz/schlossteich.jpg";
import bahnhof from "../../images/chemnitz/bahnhof.jpg";
import center1 from "../../images/chemnitz/center1.jpg";
import Johannisplatz from "../../images/chemnitz/Johannisplatz.jpg";
import marx from "../../images/chemnitz/marx.jpg";
import theater from "../../images/chemnitz/theater.jpg";
import TeamMembers from "../../components/TeamMembers/TeamMembers";

const images:string[]=[schlossteich,bahnhof,center1,Johannisplatz,marx,theater ]; 

const HomePage: FC = (): ReactElement => {
    return (
      	<div className="generalContainer1 homeContainer1">
			<div className="generalContainer2 homeContainer2">
		 		<SlideShow imageList={images} />
 				<ApplicationInfo />
				 <TeamMembers />
			</div>
      	</div>
    );
}

export default HomePage;
