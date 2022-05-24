import './App.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col>
          <h1 className='col'>Hello World</h1>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
