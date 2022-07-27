import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{backgroundColor :'#7D9D9C'}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>
  );
}

export default ColorSchemesExample;