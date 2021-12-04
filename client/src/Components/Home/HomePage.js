import React from 'react'
import { Carousel } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <div className='home-page'>
                <Carousel style={{ maxWidth: 700 }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='../images/home/slide2.jpg'
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Only the best phones</h3>
                            <p>Our phones are equiped with the lates apps for your various needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='./images/home/AI-11.jpg'
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Only the best cameras</h3>
                            <p>Are you a fan of photography? Take a picture and save that memory.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-text'>
                <h3>You're interested in technology, Smart phones or laptops?</h3>
                <h6 style={{ marginTop: 20 }}>We have what you're looking for.</h6>
                <p style={{ marginTop: 30 }}>This our site where we provide all what you want that is related to modern technology, it offers you the opportunity to pick your favorite products that your looking for! Just take a look at our page! Don't miss your chance!</p>
            </div>
        </>)
}

export default HomePage
