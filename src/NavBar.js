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
            <LinkContainer to="/categoria/electronics">
              <Nav.Link>Electronics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/jewelery">
            <Nav.Link>Jewelery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/men's clothing">
            <Nav.Link>Men's clothing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/women's clothing">
            <Nav.Link>Women's clothing</Nav.Link>
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