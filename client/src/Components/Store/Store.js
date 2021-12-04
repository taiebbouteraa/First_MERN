import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router'
import CartItem from './CartItem'

const Store = () => {

    const { user } = useSelector(state => state.authReducer)
    const { phones } = useSelector(state => state.adminPhoneReducer)

    return (
        <div>
            <Table className='items-head'>
                <thead>
                    <tr>
                        <th style={{ width: 221, textAlign: 'center' }}>Image</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Brand</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item price</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item count</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item sum</th>
                        <th style={{ width: 200, textAlign: 'center' }}></th>
                    </tr>
                </thead>
            </Table>
            <div className='shop-phones'>
                {user.cart.map((el) => (<CartItem item={el} phones={phones} key={el._id} />))}
            </div>
            <div id='shop-total-price'>
                <p>{`Total price : ${user.userName} $`}</p>
                <Button variant='danger' style={{ margin: 10, width: 80 }}>Cancle</Button>
                <Button variant='success' style={{ margin: 10, width: 80 }}>Buy</Button>
            </div>
        </div>
    )
}

export default Store
