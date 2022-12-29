import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import CreateNote from './components/create_note'
import NoteList from './components/note_list'
import EditNote from './components/edit_note'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-note'} className="nav-link">Kwame.ai Notes </Link>
              </Navbar.Brand>
              <Nav fill variant="tabs">
                <Nav.Item>
                  <Nav>
                    <Link to={'/create-note'} className="nav-link">Create Note </Link>
                  </Nav>
                </Nav.Item>
                <Nav.Item>
                  <Nav>
                    <Link to={'/note-list'} className="nav-link"> Note List </Link>
                  </Nav>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
          <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<CreateNote/>}
                  />
                  <Route
                    exact
                    path="/create-note"
                    element={<CreateNote/>}
                  />
                  <Route
                    path="/edit-note/:id"
                    element={<EditNote/>}
                  />
                  <Route
                    path="/note-list"
                    element={<NoteList/>}
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router> 
    </div>
  );
}

export default App;
