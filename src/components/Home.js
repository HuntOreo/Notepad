import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Notepads from './Notepads';

const Home = ({ user, myNotepads }) => {
    return (
        
        <div className='wrapper'>
            <Container>
                <Row>
                <Col>
                    <h1>Hello {user.name}</h1>
                    <Notepads notepads={myNotepads} />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home