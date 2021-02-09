import React, { StatelessComponent } from "react";

import "./NotFound.css";

const NotFound: StatelessComponent =
    () => (
        <div className="NotFound">
            <div className="NotFound__content">
                not found<br/>
                :-(
            </div>
        </div>
    );

export default NotFound;
