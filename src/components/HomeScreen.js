import React from "react";
import Banner from "./Banner";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./HomeScreen.css";
import PostItem from "./PostItem";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <Container className="homescreen-content">
        <Row>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Header>
                <strong>Featured Clubs</strong>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Liverpool</ListGroup.Item>
                <ListGroup.Item>Arsenal</ListGroup.Item>
                <ListGroup.Item>Manchester United</ListGroup.Item>
                <ListGroup.Item>Chelsea</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={9}>
            <h2>Club jerseys</h2>
            <PostItem />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomeScreen;
