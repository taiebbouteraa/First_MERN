import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeCompPhone1, removeCompPhone2 } from '../../redux/actions/phoneCompActions'

const PhoneComp = () => {
    const { comp } = useSelector(state => state.phoneCompReducer)
    const dispatch = useDispatch()
    const removeNbOne = () => {
        if (comp.comp1.model)
            if (window.confirm('Are you sure you want to remove this phone from comarison table?')) dispatch(removeCompPhone1())
    }
    const removeNbTwo = () => {
        if (comp.comp2.model)
            if (window.confirm('Are you sure you want to remove this phone from comarison table?')) dispatch(removeCompPhone2())
    }
    return (
        <div className='compare-phones'>
            <h1 className='compair-title'>Phone Compair</h1>
            <div className="container">
                <div className="row">
                    <div className="col-1" id='specIMG'>
                        Phone
                    </div>
                    <div className="col">
                        <img src={comp.comp1.phoneImage} alt={comp.comp1.model} style={{ maxWidth: 150 }} />
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        <img src={comp.comp2.phoneImage} alt={comp.comp2.model} style={{ maxWidth: 150 }} />
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Model
                    </div>
                    <div className="col">
                        {comp.comp1.model}
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        {comp.comp2.model}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Main camera
                    </div>
                    <div className="col">
                        {comp.comp1.mainCamera === '' ? '' : `${comp.comp1.mainCamera} MP`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.frontCamera && comp.comp2.frontCamera) === '' ? ''
                            : comp.comp1.mainCamera > comp.comp2.mainCamera ? '>'
                                : comp.comp1.mainCamera === comp.comp2.mainCamera ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.mainCamera === '' ? '' : `${comp.comp2.mainCamera} MP`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Selfie camera
                    </div>
                    <div className="col">
                        {comp.comp1.frontCamera === '' ? '' : `${comp.comp1.frontCamera} MP`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.frontCamera && comp.comp2.frontCamera) === '' ? ''
                            : comp.comp1.frontCamera > comp.comp2.frontCamera ? '>'
                                : comp.comp1.frontCamera === comp.comp2.frontCamera ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.frontCamera === '' ? '' : `${comp.comp2.frontCamera} MP`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        RAM
                    </div>
                    <div className="col">
                        {comp.comp1.RAM === '' ? '' : `${comp.comp1.RAM} GO`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.RAM && comp.comp2.RAM) === '' ? ''
                            : comp.comp1.RAM > comp.comp2.RAM ? '>'
                                : comp.comp1.RAM === comp.comp2.RAM ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.RAM === '' ? '' : `${comp.comp2.RAM} GO`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Storage
                    </div>
                    <div className="col">
                        {comp.comp1.storage === '' ? '' : `${comp.comp1.storage} GO`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.storage && comp.comp2.storage) === '' ? ''
                            : comp.comp1.storage > comp.comp2.storage ? '>'
                                : comp.comp1.storage === comp.comp2.storage ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.storage === '' ? '' : `${comp.comp2.storage} GO`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Battery
                    </div>
                    <div className="col">
                        {comp.comp1.battery === '' ? '' : `${comp.comp1.battery} mAh`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.battery && comp.comp2.battery) === '' ? ''
                            : comp.comp1.battery > comp.comp2.battery ? '>'
                                : comp.comp1.battery === comp.comp2.battery ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.battery === '' ? '' : `${comp.comp2.battery} mAh`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                        Price
                    </div>
                    <div className="col">
                        {comp.comp1.price === '' ? '' : `${comp.comp1.price} $`}
                    </div>
                    <div className="col-1">
                        {(comp.comp1.price && comp.comp2.price) === '' ? ''
                            : comp.comp1.price > comp.comp2.price ? '>'
                                : comp.comp1.price === comp.comp2.price ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp.comp2.price === '' ? '' : `${comp.comp2.price} $`}
                    </div>
                </div>
                <div className="row to-line">
                    <div className="col-1">
                    </div>
                    <div className="col">
                        <Button variant='danger' onClick={() => removeNbOne()} >Remove</Button>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        <Button variant='danger' onClick={() => removeNbTwo()}>Remove</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PhoneComp
