import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { addCompPhone } from '../../redux/actions/phoneCompActions'
import { useDispatch, useSelector } from 'react-redux'


const PhoneSpecs = ({ phone }) => {
    const { auth } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const params = useParams()
    let spec = phone.filter(el => el._id === params._id)
    return (
        <div >
            {spec.map(el => (<div className='phone-details' key={el._id}>
                <div className='phone-specs'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${el.phoneImage}`} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Brand : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.brand}</span></ListGroupItem>
                            <ListGroupItem>Main camera : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.mainCamera} MP</span> </ListGroupItem>
                            <ListGroupItem>Front camera : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.frontCamera} MP</span></ListGroupItem>
                            <ListGroupItem>RAM : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.RAM} MP</span> </ListGroupItem>
                            <ListGroupItem>Storage : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.storage} MP</span></ListGroupItem>
                            <ListGroupItem>Battery : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.battery} mAh</span></ListGroupItem>
                            <ListGroupItem>Price : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.price} $</span></ListGroupItem>
                        </ListGroup>
                        {auth ? <div className='specs-btns'>
                            <Button /*onClick={() => dispatch(buyItem({
                                id: el.id,
                                phoneImage: el.phoneImage,
                                brand: el.brand,
                                name: el.name,
                                price: el.price,
                                counter: 1,
                            }))}*/>Buy Now</Button>
                            <Button variant="outline-success" className='card-btn' onClick={() => dispatch(addCompPhone({
                                phoneImage: el.phoneImage,
                                name: el.model,
                                mainCamera: el.mainCamera,
                                frontCamera: el.frontCamera,
                                RAM: el.RAM,
                                storage: el.storage,
                                battery: el.battery,
                                price: el.price,
                            }))}>Compaire</Button>
                        </div> : <div className='specs-btns'>
                            <Button variant="outline-success" className='card-btn' onClick={() => dispatch(addCompPhone({
                                phoneImage: el.phoneImage,
                                name: el.model,
                                mainCamera: el.mainCamera,
                                frontCamera: el.frontCamera,
                                RAM: el.RAM,
                                storage: el.storage,
                                battery: el.battery,
                                price: el.price,
                            }))}>Compaire</Button>
                        </div>}
                    </Card>
                </div>
                <div className='phone-vid'>
                    <h4>For further informations on the phone, watch the video below</h4>
                    < iframe width="720" height="480" src={el.trailer.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={el.name}></iframe>
                </div>
            </div>))}
        </div>
    )
}

export default PhoneSpecs
