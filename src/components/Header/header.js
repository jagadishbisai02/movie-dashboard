import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./header.css";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/context";

const Header = () => {
  const [inputValue, setInputValue] = useState('')
  const { handleSearch } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBtnClick = () =>{
    handleSearch(inputValue)
  }
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
                  value={inputValue}
                  type="search"
                  placeholder="Movie Names"
                  className="me-2 bg-light"
                  aria-label="Search"
                  onChange={handleInputChange}
                />
                <Button variant="secondary links" onClick={handleBtnClick}>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
