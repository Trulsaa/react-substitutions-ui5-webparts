import "@ui5/webcomponents/dist/Icon";

import React, { Component } from "react";
import styled from "styled-components";

import HeaderContent from "./components/HeaderContent";
import ListContent from "./components/ListContent";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header header header"
    "list view view"
    "footer footer footer";
  height: 100vh;
`;

const Header = styled.div`
  grid-area: header;
`;

const List = styled.div`
  grid-area: list;
  overflow: auto;
`;

const View = styled.div`
  grid-area: view;
  display: grid;
  overflow: auto;
`;

const Footer = styled.div`
  grid-area: footer;
`;

class App extends Component {
  render() {
    return (
      <Grid>
        <Header>
          <HeaderContent />
        </Header>
        <List>
          <ListContent />
        </List>
        <View>
          <ui5-icon class="samples-margin" src="sap-icon://employee" />
        </View>
        <Footer>
          <HeaderContent />
        </Footer>
      </Grid>
    );
  }
}

export default App;
