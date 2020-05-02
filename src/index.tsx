import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";
import { HelloComponent } from "./hello/hello";

import "bulma/bulma.sass";

ReactDOM.render(
    <React.Fragment>
        <Normalize />
        <I18nextProvider i18n={i18n}>
            <HelloComponent />
        </I18nextProvider>
    </React.Fragment>,
    document.getElementById("app"),
);
