import React, { useState } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from '../../redux/actions/authActions'
import Loader from '../General/Loader';


const RegisterModal = () => {
    const dispatch = useDispatch()
    const { loading, auth } = useSelector(state => state.authReducer)
    //modal fonctions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal usestate
    const [userName, setUserName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    //register fct
    const registerNewUser = (e) => {
        // e.preventDefault()
        dispatch(register({ userName, mail, password }))
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Register
            </Button>

            {loading ? <Loader /> : auth ? <Navigate to='/' /> :
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit this phone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <div>User name</div>
                                <Col>
                                    <Form.Control placeholder="User name" type='text' onChange={e => setUserName(e.target.value)} value={userName} />
                                </Col>
                            </Row>
                            <Row>
                                <div>E-mail</div>
                                <Col>
                                    <Form.Control placeholder="e-mail" type='email' onChange={e => setMail(e.target.value)} value={mail} />
                                </Col>
                            </Row>
                            <Row>
                                <div>Password</div>
                                <Col>
                                    <Form.Control placeholder="password" type='password' onChange={e => setPassword(e.target.value)} value={password} />
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' onClick={registerNewUser}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>}
        </>
    )
}

export default RegisterModal
