import React, { useState } from 'react'
import { Form, Modal, Row, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { editPhone } from '../../../redux/actions/adminPhoneAction';

const AdminEditPhone = ({ phone }) => {
    const { _id } = useParams()
    // let phoneToEdit = phone.filter(el => el._id === params._id)
    let spec = phone[0]
    //modal fonctions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal values for state changes
    const [brand, setBrand] = useState(spec.brand)
    const [model, setModel] = useState(spec.model)
    const [phoneImage, setPhoneImage] = useState(spec.phoneImage)
    const [mainCamera, setMainCamera] = useState(spec.mainCamera)
    const [frontCamera, setFrontCamera] = useState(spec.frontCamera)
    const [RAM, setRAM] = useState(spec.RAM)
    const [storage, setStorage] = useState(spec.storage)
    const [battery, setBattery] = useState(spec.battery)
    const [price, setPrice] = useState(spec.price)
    const [stock, setStock] = useState(spec.stock)
    const [trailer, setTrailer] = useState(spec.trailer)
    //func to edit the phone in DB
    const dispatch = useDispatch()
    const adminEditPhone = () => {
        dispatch(editPhone(_id, {
            brand,
            model,
            phoneImage,
            mainCamera,
            frontCamera,
            RAM,
            storage,
            battery,
            price,
            stock,
            trailer
        }))
        handleClose()

    }
    return (
        <div>
            <Button variant="outline-primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit this phone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <div>Brand</div>
                            <Col>
                                <Form.Control placeholder="Brand" type='text' onChange={e => setBrand(e.target.value)} value={brand} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Model</div>
                            <Col>
                                <Form.Control placeholder="Model" type='text' onChange={e => setModel(e.target.value)} value={model} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Image URL</div>
                            <Col>
                                <Form.Control placeholder="Image URL" type='url' onChange={e => setPhoneImage(e.target.value)} value={phoneImage} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Main camera</div>
                            <Col>
                                <Form.Control placeholder="Main camera" type='number' onChange={e => setMainCamera(e.target.value > 0 ? e.target.value : 0)} value={mainCamera} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Front camera</div>
                            <Col>
                                <Form.Control placeholder="Front camera" type='number' onChange={e => setFrontCamera(e.target.value > 0 ? e.target.value : 0)} value={frontCamera} />
                            </Col>
                        </Row>
                        <Row>
                            <div>RAM</div>
                            <Col>
                                <Form.Control placeholder="RAM" type='number' onChange={e => setRAM(e.target.value > 0 ? e.target.value : 0)} value={RAM} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Storage</div>
                            <Col>
                                <Form.Control placeholder="Storage" type='number' onChange={e => setStorage(e.target.value > 0 ? e.target.value : 0)} value={storage} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Batery capacity</div>
                            <Col>
                                <Form.Control placeholder="Batery capacity" type='number' onChange={e => setBattery(e.target.value > 0 ? e.target.value : 0)} value={battery} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Price</div>
                            <Col>
                                <Form.Control placeholder="Price" type='number' onChange={e => setPrice(e.target.value > 0 ? e.target.value : 0)} value={price} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Stock</div>
                            <Col>
                                <Form.Control placeholder="Stock" type='number' onChange={e => setStock(e.target.value > 0 ? e.target.value : 0)} value={stock} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Video URL</div>
                            <Col>
                                <Form.Control placeholder="Video URL" type='url' onChange={e => setTrailer(e.target.value)} value={trailer} />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={adminEditPhone}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default AdminEditPhone
