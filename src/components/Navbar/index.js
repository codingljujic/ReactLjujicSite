import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ljujicLogo from './ljujicLogo.jpg';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ljujic-color">
      <Container>
        <Navbar.Brand href="">Братство Љујића </Navbar.Brand>
        <Navbar.Brand href="">
            <img
              src= {ljujicLogo}
              width="75"
              height="75"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Почетна</Nav.Link>
            <Nav.Link href="/about">О нама</Nav.Link>
            <NavDropdown title="Рад братства" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/blogs">Блог</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;