import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom'
import { addCompPhone } from '../../redux/actions/phoneCompActions'
// import { addPhoneToCart } from '../../redux/actions/authActions'

const PhoneCard = ({ phone/*, user*/ }) => {
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


    //dispatch comp phone
    let phoneToComp = {
        phoneImage: phone.phoneImage,
        model: phone.model,
        mainCamera: phone.mainCamera,
        frontCamera: phone.frontCamera,
        RAM: phone.RAM,
        storage: phone.storage,
        battery: phone.battery,
        price: phone.price,
    }
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
                        <Button variant="primary" className='card-btn' onClick={() => dispatch(addCompPhone(phoneToComp))} >Compaire</Button>
                        <Link to={`/phones/specs/${phone._id}`} >
                            <Button variant="warning" className='card-btn'>Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default PhoneCard
