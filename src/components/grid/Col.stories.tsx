import * as React from "react";
import {Col} from "./Col";
import {Row} from "./Row";

export default {
  component: Col,
  title: "Col"
};

export const Simple = () => (
  <Row style={{height: 50}}>
    <Col style={{border: "1px solid red"}} md={6} lg={2}>md-6 / lg-2</Col>
    <Col style={{border: "1px solid blue"}} md={4}>md-4</Col>
    <Col style={{border: "1px solid green"}} md={2} lg={6}>md-2 / lg-6</Col>
  </Row>
);

export const Grown = () => (
  <Row style={{height: 50}}>
    <Col style={{border: "1px solid red"}} lg={2}>lg-2</Col>
    <Col style={{border: "1px solid blue"}} lgGrow={true}>lgGrow</Col>
    <Col style={{border: "1px solid green"}} lg={3}>lg-3</Col>
  </Row>
);
