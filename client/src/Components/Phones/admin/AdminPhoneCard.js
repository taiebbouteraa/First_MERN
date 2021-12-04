import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePhone } from '../../../redux/actions/adminPhoneAction'
// import { addPhoneToCart } from '../../redux/actions/authActions'

const AdminPhoneCard = ({ phone/*, user*/ }) => {
    const dispatch = useDispatch()
    // const { _id } = user
    //dispatche buy phone
    // const buyPhone = () => {
    //     const newPhone = {
    //         phoneImage: phone.phoneImage,
    //         brand: phone.brand,
    //         model: phone.model,
    //         price: phone.price,
    //         shop: 1
    //     }
    //     dispatch(addPhoneToCart(_id, {
    //         cart: [...user.cart, newPhone]
    //     }
    //     ))
    // }

    return (
        <div className='individual-phone' key={phone._id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={phone.phoneImage} alt={phone.model} />
                <Card.Body>
                    <Card.Title>{phone.model}</Card.Title>
                    <Card.Text>
                        {phone.price} $
                    </Card.Text>
                    <div className='card-btns'>
                        <Button variant="success" className='card-btn' /*onClick={() => buyPhone()}*/ >Buy</Button>
                        <Link to={`/phones/specs/${phone._id}`} >
                            <Button variant="warning" className='card-btn'>Details</Button>
                        </Link>
                        <Button variant="danger" onClick={() => dispatch(deletePhone(phone._id))}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default AdminPhoneCard
