import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Barra =()=>{
  return (
    <>
    
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
        
            <Navbar.Brand href="#">Bienvenido Fanor</Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Brand href="#">Cerrar Sesion</Navbar.Brand>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Opciones
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  <NavDropdown
                    title="Registros"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/registrarPersona">Registrar Persona</NavDropdown.Item>
                    <NavDropdown.Item href="/registrarCiudad">
                      Registrar Ciudad
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Reportes"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/verPersonas">Ver Personas</NavDropdown.Item>
                    <NavDropdown.Item href="/verCiudad">
                      Ver Ciudad
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  );
}

