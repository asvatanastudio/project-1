import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategory, Menus, NavbarComp } from "./component";
import { API_URL } from "./utils/constans";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "product")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { menus } = this.state;

    return (
      <div className="App">
        <NavbarComp />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Col md={2}>
                <ListCategory />
              </Col>

              <Col md={7}>
                <h5>
                  <strong>Daftar Menu</strong>
                </h5>
                <Row>
                  {menus.map((menu) => (
                    <Menus key={menu.id} menu={menu} />
                  ))}
                </Row>
              </Col>

              <Col md={3}>
                <h5>
                  <strong>Hasil Pesanan</strong>
                </h5>
                <Hasil />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
