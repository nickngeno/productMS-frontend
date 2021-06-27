import React from "react";
import { Card, Image, Row } from "react-bootstrap";
import "./PostItem.css";
import man from "../Images/man.png";
import { Link } from "react-router-dom";

const PostItem = () => {
  return (
    <div className="posts-div">
      <Card>
        <Image src={man} />
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/productDetails" className="btn btn-secondary btn-block">
            Update Item
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Image src={man} />
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/productDetails" className="btn btn-secondary btn-block">
            Update Item
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Image src={man} />
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/productDetails" className="btn btn-secondary btn-block">
            Update Item
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Image src={man} />
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/productDetails" className="btn btn-secondary btn-block">
            Update Item
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostItem;
