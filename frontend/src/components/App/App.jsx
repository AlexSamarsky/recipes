import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import CategorySwitch from "../CategorySwitch/CategorySwitch.jsx";
import Recipes from "../Recipes/Recipes.js";

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <CategorySwitch />
          </Row>
          <Row>
            <Recipes />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
