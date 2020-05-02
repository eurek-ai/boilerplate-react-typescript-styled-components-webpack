import * as React from "react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import * as Style from "./hello.styles";

export const HelloComponent: FunctionComponent = () => {
    const { t } = useTranslation();
    return <Style.Head1>{t("global.hello")}</Style.Head1>;
};
