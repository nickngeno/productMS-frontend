import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import man from "../Images/man.png";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <>
      <Container className="product-details">
        <Row>
          <Col md={8}>
            <Card>
              <Card.Body>
                <div className="card-image">
                  <Image src={man} style={{ width: "400px" }} />
                </div>
                <Card.Title> Arsenal Fc</Card.Title>
                <Card.Text className="text-muted">
                  {" "}
                  Arsenal Home Shirt
                </Card.Text>
                <hr />
                <Card.Subtitle>Description</Card.Subtitle>
                <Card.Text className="text-muted">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sapiente officiis veritatis ducimus ab accusantium
                  nulla doloremque minima optio. Quod porro quas vel fugit
                  distinctio fuga blanditiis recusandae deserunt accusantium!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Price KSh 5,000</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
