import React, { FC, ReactElement } from "react";
import SlideShow from "../../components/slideShow/SlideShow";
import "./Home.scss";

type IProps = {

}

const HomePage: FC<IProps> = (): ReactElement => {
    return (
      	<div className="generalContainer1 homeContainer1">
			<div className="generalContainer2 homeContainer2">
				<SlideShow />
			</div>
      	</div>
    );
}

export default HomePage;
