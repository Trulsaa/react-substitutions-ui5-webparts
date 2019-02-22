import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/ShellBar";

import React from "react";

export default () => (
  <ui5-shellbar
    id="shellbar"
    primary-title="Substitutions"
    logo="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
    notification-count="99+"
    show-notifications
    show-product-switch
    show-co-pilot
  >
    <div />
  </ui5-shellbar>
);
