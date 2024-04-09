import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./header.css";
import { useState } from "react";

const Header = ({ onSearch }) => {
  console.log(onSearch);
  const { searchValue, setSearchValue } = useState("");

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-0 px-4"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="header">
            MovieDb
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 links">
                <Nav.Link href="/">Popular</Nav.Link>
                <Nav.Link href="/top-rated">Top Rated</Nav.Link>
                <Nav.Link href="/upcoming">Upcoming</Nav.Link>
              </Nav>
              <Form className="d-flex links">
                <Form.Control
                  value={searchValue}
                  type="search"
                  placeholder="Movie Names"
                  className="me-2 bg-light"
                  aria-label="Search"
                  onChange={onChange}
                />
                <Button variant="secondary links" onClick={handleSearch}>
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
