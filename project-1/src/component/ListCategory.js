import React, { Component } from 'react';
import { Col } from 'react-bootstrap'; // pastikan sudah install react-bootstrap

export default class ListCategory extends Component {
  render() {
    return (
      <Col md={2} mt='2'>
        <h5><strong>Daftar Kategori</strong></h5>
        <hr />
        {/* Tempat untuk daftar kategori */}
      </Col>
    );
  }
}
