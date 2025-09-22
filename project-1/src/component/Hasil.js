import React, { component } from "react";
import { Col } from "react-bootstrap";

export default class Hasil extends component {
  render() {
    return (
      <Col md={2} mt="2">
        <h5>
          <strong>Hasil</strong>
        </h5>
        <hr />
      </Col>
    );
  }
}
