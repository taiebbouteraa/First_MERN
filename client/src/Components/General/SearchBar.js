import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select';



const SearchBar = () => {
    const { phones } = useSelector(state => state.phonesReducer)
    const options = phones.map((el) => ({ value: el._id, label: el.model }))

    const [redirecting, setRedirecting] = useState('')
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
            <Link to={`/phones/specs/${redirecting.value}`}>
                <Button>
                    Go
                </Button>
            </Link>
        </div>
    )

}

export default SearchBar
