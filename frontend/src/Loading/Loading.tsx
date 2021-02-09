import React, { StatelessComponent } from "react";

import "./Loading.css";

const Loading: StatelessComponent =
    () => (
        <div className="Loading">
            <div className="Loading__content">
                loading…
            </div>
        </div>
    );

export default Loading;
