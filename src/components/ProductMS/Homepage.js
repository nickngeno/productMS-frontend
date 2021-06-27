import React from "react";
import { Container, Row, Col, Nav, Card, ListGroup } from "react-bootstrap";
import PostItem from "../PostItem";
import Search from "../Search";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Container className="homescreen-content">
      <h2>Product Management Module</h2>
      <Row>
        <Col className="mb-2">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home"> Add Product</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="/categories" eventKey="link-1">Categories</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <strong>Categories</strong>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Liverpool</ListGroup.Item>
              <ListGroup.Item>Arsenal</ListGroup.Item>
              <ListGroup.Item>Manchester United</ListGroup.Item>
              <ListGroup.Item>Chelsea</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={9}>
            <Search />
          <PostItem />
        </Col>
      </Row>
      <p>this is th homepage</p>
    </Container>
  );
};

export default Homepage;
