import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './components/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
     
      <Navbar bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >Kittens</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/features">
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/pricing">
            <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
            <Nav.Link>
              <CartWidget count={6}/>
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;