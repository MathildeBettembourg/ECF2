import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PageAffichageLocataire from './Pages/PageAffichageLocataires';
import CompModifLocataire from "../src/Component/CompModifLocataire"

function App() {
  return (
    <>
      <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand Link to="/PageAffichageLocataire">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/PageAffichageLocataire">Locataires</Link></Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<PageAffichageLocataire/>}/>
        <Route path='/PageAffichageLocataire' element={<PageAffichageLocataire/>}/>
        <Route path='/CompModifLocataire/:id' element={<CompModifLocataire/>}/>
      </Routes>
      </Router>
    </>

  );
}

export default App;
