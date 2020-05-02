import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { HelloComponent } from "./hello/hello";

import "bulma/bulma.sass";

ReactDOM.render(
    <React.Fragment>
        <Normalize />
        <HelloComponent />
    </React.Fragment>,
    document.getElementById("app"),
);
