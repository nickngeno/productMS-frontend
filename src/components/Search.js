import React from "react";
import { Container, Row, Form, FormControl, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container>
      <Row>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Row><hr/>
    </Container>
  );
};

export default Search;
