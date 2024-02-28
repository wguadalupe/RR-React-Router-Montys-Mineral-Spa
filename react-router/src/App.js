import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have this import for Bootstrap styles

function App() {
  const packages = [
    'Activate your Crystals',
    'Monkey Meditation', 
    'Soak in the Hotsprings', 
    'Hypnotherapy', 
    'Mineral Bath'
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          {/* React Bootstrap Navigation */}
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" eventKey="aboutPage">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/packages" eventKey="packagesPage">Our Packages</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          {/* End of React Bootstrap Navigation */}

          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages packages={packages} />} />
            </Routes>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
