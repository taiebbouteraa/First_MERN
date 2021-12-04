import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPhone } from '../../../redux/actions/adminPhoneAction';

const AdminAddPhone = () => {
    //modal fonctions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal values for state changes
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [phoneImage, setPhoneImage] = useState('')
    const [mainCamera, setMainCamera] = useState('')
    const [frontCamera, setFrontCamera] = useState('')
    const [RAM, setRAM] = useState('')
    const [storage, setStorage] = useState('')
    const [battery, setBattery] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [trailer, setTrailer] = useState('')
    //func to add the phone in DB
    const dispatch = useDispatch()
    const newPhone = () => {
        dispatch(addPhone({
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
            <Button variant="primary" onClick={handleShow}>
                New phone
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new phone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <div>Brand</div>
                            <Col>
                                <Form.Control placeholder="Brand" type='text' onChange={e => setBrand(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Model</div>
                            <Col>
                                <Form.Control placeholder="Model" type='text' onChange={e => setModel(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Image URL</div>
                            <Col>
                                <Form.Control placeholder="Image URL" type='url' onChange={e => setPhoneImage(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Main camera</div>
                            <Col>
                                <Form.Control placeholder="Main camera" type='number' onChange={e => setMainCamera(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Front camera</div>
                            <Col>
                                <Form.Control placeholder="Front camera" type='number' onChange={e => setFrontCamera(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>RAM</div>
                            <Col>
                                <Form.Control placeholder="RAM" type='number' onChange={e => setRAM(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div>Storage</div>
                            <Col>
                                <Form.Control placeholder="Storage" type='number' onChange={e => setStorage(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Batery capacity</div>
                            <Col>
                                <Form.Control placeholder="Batery capacity" type='number' onChange={e => setBattery(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Price</div>
                            <Col>
                                <Form.Control placeholder="Price" type='number' onChange={e => setPrice(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Stock</div>
                            <Col>
                                <Form.Control placeholder="Stock" type='number' onChange={e => setStock(e.target.value > 0 ? e.target.value : 0)} />
                            </Col>
                        </Row>
                        <Row>
                            <div className='mx-auto'>Video URL</div>
                            <Col>
                                <Form.Control placeholder="Video URL" type='url' onChange={e => setTrailer(e.target.value)} />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={newPhone}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AdminAddPhone
