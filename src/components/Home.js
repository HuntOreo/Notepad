import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Notepads from './Notepads';

const Home = ({ user, myNotepads }) => {
    return (
        <Container>
            <Row>
            <Col>
                <h1 className='col'>Hello {user.name}</h1>
                <Notepads notepads={myNotepads} />
            </Col>
            </Row>
        </Container>
    )
}

export default Home