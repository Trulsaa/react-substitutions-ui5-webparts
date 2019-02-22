import React, { Component } from "react";
import styled from "styled-components";
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/Input";

export default () => (
  <ui5-shellbar
    id="shellbar"
    primary-title="Corporate Portal"
    secondary-title="secondary title"
    profile="../../../../../../www/samples/images/woman_avatar_5.png"
    notification-count="99+"
    show-notifications
    show-product-switch
    show-co-pilot
  >
    <div>
      <ui5-icon src="nav-back" data-ui5-slot="icon" />
      <ui5-input data-ui5-slot="searchField" />
    </div>
  </ui5-shellbar>
);
