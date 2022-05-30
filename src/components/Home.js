import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Notepads from './Notepads';

const Home = ({ user, myNotepads, notepadNameFlag, setNotepadNameFlag }) => {
    return (
        
        <div className='wrapper'>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello {user.name}</h1>
                        <Notepads notepads={myNotepads} notepadNameFlag={notepadNameFlag} setNotepadNameFlag={setNotepadNameFlag} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home