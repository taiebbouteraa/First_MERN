import React, { /*useEffect,*/ useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removePhoneFromCart, userUpdateCart } from '../../../redux/actions/authActions'
import { useParams } from 'react-router'
// import { useSelector } from 'react-redux'

const CartItem = ({ item, phones }) => {
    const dispatch = useDispatch()

    //filter the phone to get stock value
    let filterStock = phones.filter(el => el.model === item.model)[0].stock

    const { _id } = useParams()  //getting user id

    const [shopCount, setShopCount] = useState(item.shop)
    //buy one more 
    const addOne = () => {
        shopCount < filterStock ? setShopCount(shopCount + 1) : setShopCount(filterStock)
        dispatch(userUpdateCart(_id, {
            cart: {
                shop: shopCount,
                phoneImage: item.phoneImage,
                brand: item.brand,
                model: item.model,
                price: item.price
            }
        }))
    }
    //buy one less
    const subOne = () => {
        shopCount > 1 ? setShopCount(shopCount - 1) : setShopCount(1)
        dispatch(userUpdateCart(_id, {
            cart: {
                shop: shopCount,
                phoneImage: item.phoneImage,
                brand: item.brand,
                model: item.model,
                price: item.price
            }
        }))
    }
    //dont buy phone
    // const removePhone = (id) => {
    //     // let newCart = item.filter(el => el._id !== id)
    //     dispatch(removePhoneFromCart(_id, {
    //         cart: newCart
    //     }
    //     ))
    // }



    return (
        <div className='shop-items'>
            <Table striped bordered hover size="sm">
                <tbody >
                    <tr>
                        <td style={{ width: 200 }}><img src={item.phoneImage} alt={item.model} style={{ maxWidth: 150, maxHeight: 150 }} /> </td>
                        <td style={{ width: 200 }}>{item.brand}</td>
                        <td style={{ width: 200 }}>{item.model}</td>
                        <td style={{ width: 200 }}>{item.price} $</td>
                        <td style={{ width: 200 }}>
                            <Button onClick={() => subOne()}> - </Button>
                            <div>{shopCount}</div>
                            <Button onClick={() => addOne()}>+</Button>
                        </td>
                        <td style={{ width: 200 }}>{item.price * shopCount} $</td>
                        <td style={{ width: 200 }}><Button variant="danger" onClick={() => /*dispatch(removePhone(item._id))*/console.log(item._id)}>Remove</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CartItem
