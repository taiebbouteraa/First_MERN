import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select';



const Filter = () => {
    const { phones } = useSelector(state => state.adminPhoneReducer)
    const options = phones.map((el) => ({ value: el._id, label: el.brand }))
    const [redirecting, setRedirecting] = useState('')
    console.log(redirecting.label)
    const handleChange = (e) => {
        setRedirecting(e);
    }
    return (
        <div className='search-link'>
            <Select
                placeholder='Search'
                options={options}
                value={redirecting}
                onChange={handleChange}
            />
        </div>
    )

}

export default Filter
