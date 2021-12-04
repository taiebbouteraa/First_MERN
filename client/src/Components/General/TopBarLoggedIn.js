import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import SearchBar from './SearchBar';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';


const TopBarLoggedIn = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.authReducer)

    return (
        <>
            <div >
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >
                        <img src='../images/home/logo.png' alt='LOGO' style={{ maxHeight: 50, marginLeft: '2rem' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <SearchBar />
                        </Nav>
                        <div className='icons'>
                            <Link to='/'>
                                <HomeIcon />
                            </Link>
                            <Link to='/phones'>
                                <PhoneAndroidIcon />
                            </Link>
                            {/* <Link to={`/user/${user._id}`}>
                                <AccountCircleIcon />
                            </Link> */}
                            <Link to={`/user/${user._id}/store`}>
                                <ShoppingCartIcon />
                            </Link>
                            <Link to='/login' style={{ paddingLeft: 13, textDecoration: 'none' }}>
                                <div className='login-out' onClick={() => dispatch(logout())}>Logout</div>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default TopBarLoggedIn
