import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './components/CartWidget';

function NavBar() {
  return (
    <>
     
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kittens</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <CartWidget count={6}/>
        </Container>
        
      </Navbar>

      
     
    </>
  );
}

export default NavBar;