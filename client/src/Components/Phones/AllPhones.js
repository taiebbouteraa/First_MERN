import React, { /*useEffect,*/ useState } from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import Select from 'react-select';
import PhoneCard from './PhoneCard';
import AdminPhoneCard from './admin/AdminPhoneCard'
import PhoneComp from './PhoneComp';
import UnauthPhoneCard from './unauth/UnauthPhoneCard';
import AdminAddPhone from './admin/AdminAddPhone';


const AllPhones = () => {
    const { phones } = useSelector(state => state.phonesReducer)
    //-------------------------------------filter
    let filter = [{ value: null, label: "All" }]
    const options = phones.map((el) => ({ value: el._id, label: el.brand }))
    let newFilter = [...filter, ...options]
    const [redirecting, setRedirecting] = useState({ value: null, label: 'All' })
    const handleChange = (e) => {
        setRedirecting(e);
    }
    //-------------------------------------filter end
    let list = []
    redirecting.label === 'All' ?
        list = phones.map((el) => (
            localStorage.admin === undefined ?
                <UnauthPhoneCard phone={el} key={el._id} /> :
                localStorage.admin === 'false' ?
                    <PhoneCard phone={el} key={el._id} /> :
                    <AdminPhoneCard phone={el} key={el._id} />
        )) :
        list = phones.filter((el) => el.brand === redirecting.label).map((el) => (
            localStorage.admin === undefined ?
                <UnauthPhoneCard phone={el} key={el._id} /> :
                !localStorage.admin === 'false' ?
                    <PhoneCard phone={el} key={el._id} /> :
                    <AdminPhoneCard phone={el} key={el._id} />
        ))

    return (
        <div className='phones'>
            {
                //if admin show
                localStorage.admin === 'true' ?
                    <div className='admin-phones'>
                        <div className='admin-add-phone'>
                            <AdminAddPhone />
                        </div>
                        {/* filter */}
                        <div className='filter-select'>
                            <Select
                                placeholder='Search'
                                options={newFilter}
                                value={redirecting}
                                onChange={handleChange}
                            />
                            <Button variant='danger' onClick={() => setRedirecting({ value: null, label: 'All' })}>cancel</Button>
                        </div>
                        {/* filter end*/}
                        {/* phone list start */}
                        <div className='phone-list'>
                            {list}
                        </div>
                        {/* phone list end*/}
                        {/*--------------------------------phone comp------------------------------------*/}
                    </div>
                    :
                    //------------------------------------------------------------------------
                    //if not admin show
                    <div>
                        {/* filter */}
                        <div className='filter-select'>
                            <Select
                                placeholder='Search'
                                options={newFilter}
                                value={redirecting}
                                onChange={handleChange}
                            />
                            <Button variant='danger' onClick={() => setRedirecting({ value: null, label: 'All' })}>cancel</Button>
                        </div>
                        {/* filter end*/}
                        {/* phone list start */}
                        <div className='phone-list'>
                            {list}
                        </div>
                        {/* phone list end*/}
                        {/*--------------------------------phone comp------------------------------------*/}
                        <div>
                            <PhoneComp />
                        </div>
                    </div>
            }
        </div>)
}

export default AllPhones
