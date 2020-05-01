import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { HelloComponent } from "./component/component";

import "./styles.scss";

ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <HelloComponent />
  </React.Fragment>,
  document.getElementById("app")
);
