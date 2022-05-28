import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Notepads from './components/Notepads';


function App() {
  const [ user, setUser ] = useState({})
  const [ myNotepads, setMyNotepads ] = useState([])

  useEffect(() => {
    const getUser = async() => {
      try {

        const login = await axios.get(`/api/users/user/629255aa175a0e728a651875`)
        setUser({...login.data})
    
      } catch (error) {
        console.log(error)
      }
    }
    
    const getNotepads = async() => {
      try {

        const notepads = await axios.get('/api/notepads')
        setMyNotepads([myNotepads, ...notepads.data])

      } catch(error) {
        console.log(error)
      }
    }
    getNotepads()
    getUser()

  }, [])

  return (
    <div className="App">
      <Container>
      <Row>
        <Col>
          <h1 className='col'>Hello {user.name}</h1>
          <Notepads notepads={myNotepads} />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
