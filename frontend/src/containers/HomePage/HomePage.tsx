import React, { FC, ReactElement } from "react";
import ApplicationInfo from "../../components/ApplicationInfo/ApplicationInfo";
import SlideShow from "../../components/slideShow/SlideShow";
import "./Home.scss";

type IProps = {

}

const HomePage: FC<IProps> = (): ReactElement => {
	let erfan = 'nora';
    return (
      	<div className="generalContainer1 homeContainer1">
			<div className="generalContainer2 homeContainer2">
				<SlideShow />
				<ApplicationInfo />
			</div>
      	</div>
    );
}

export default HomePage;
