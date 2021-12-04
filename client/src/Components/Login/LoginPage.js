import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { login } from '../../redux/actions/authActions'
import RegisterModal from './RegisterModal'
import Loader from '../General/Loader'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch()
    //login usestate
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    //ligin fct
    const loginUser = (/*e*/) => {
        // e.preventDefault()
        const logins = { mail, password }
        dispatch(login(logins))
    }

    //loading + auth from auth reducer
    const { loading, auth } = useSelector(state => state.authReducer)

    return (
        <>
            {loading ? <Loader /> : localStorage.token && auth ? <Navigate to='/' /> :
                (< Form onSubmit={loginUser} style={{ width: '70%', margin: '20px auto' }} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={mail} onChange={e => setMail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className='flex mx-auto'>
                        <Button variant="primary" type="submit" style={{ marginRight: '1rem' }} >
                            Login
                        </Button>
                        <RegisterModal />
                    </div>
                </Form >)}
        </>
    )
}

export default LoginPage
