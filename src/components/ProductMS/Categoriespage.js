import React from "react";
import { Container, Row, Col, Nav, Card, Button, Table } from "react-bootstrap";
import "./Categoriespage.css";

const Categoriespage = () => {
  return (
    <Container className="homescreen-content">
      <Button variant="primary" className="mb-2">
        Add Category
      </Button>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>
                <Button>Edit </Button> <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>
                <Button>Edit </Button> <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Categoriespage;
