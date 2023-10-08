import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchValue);
    setSearchValue("");
  };
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم جديد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="...ابحث"
              className="mx-2"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className="btn-search">
              بحث
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
