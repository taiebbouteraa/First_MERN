import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPhones } from './redux/actions/phoneActions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBarNotLogged from './Components/General/TopBarNotLogged';
import TopBarLoggedIn from './Components/General/TopBarLoggedIn'
import HomePage from './Components/Home/HomePage';
import LoginPage from './Components/Login/LoginPage';
import Footer from './Components/General/Footer'
import AllPhones from './Components/Phones/AllPhones';
import PhoneSpecs from './Components/PhoneSpecs/PhoneSpec';
import { getProfile } from './redux/actions/authActions';
import { getCartById } from './redux/actions/cartActions';
import AdminPhoneSpecs from './Components/PhoneSpecs/AdminPhoneSpecs';

// import AdminAllPhones from './Components/Admin/AdminPhones/AdminAllPhones';
// import AdminPhoneSpecs from './Components/Admin/AdminPhones/AdminPhoneSpecs';
// import AdminTopBar from './Components/Admin/AdminGeneral/AdminTopBar'
// import Profile from './Components/Profile/Profile';
// import Store from './Components/Profile/Store/Store';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPhones())
    dispatch(getProfile())
  }, [dispatch])
  // const { user } = useSelector(state => state.authReducer)
  // console.log(user)
  useEffect(() => {
    dispatch(getCartById())
  }, [dispatch])


  const phoneList = useSelector(state => state.phonesReducer.phones)
  const { auth } = useSelector(state => state.authReducer)

  return (
    <div className="App">
      <Router>
        {auth ? <TopBarLoggedIn /> : <TopBarNotLogged />}
        <Routes>
          {/*login route*/}
          <Route path='/login' element={<LoginPage />} />
          {/*user components*/}
          <Route path='/' element={<HomePage />} />
          <Route path='/phones' element={<AllPhones phones={phoneList} />} />
          <Route path='/phones/specs/:_id' element={
            localStorage.admin === 'true' ?
              <AdminPhoneSpecs phone={phoneList} /> :
              <PhoneSpecs phone={phoneList} />
          } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;