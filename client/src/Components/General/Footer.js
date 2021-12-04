import React from 'react'

const Footer = () => {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img src='../images/home/logo.png' alt='LOGO' style={{ maxHeight: 50 }} />
                    <small className="d-block mb-3 text-muted">© 2017-2021</small>
                </div>
                <div className='footer-bottom'>
                    <div className="col-4 col-md">
                        <h5>Overview</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://www.google.com">What's new</a></li>
                            <li><a className="text-muted" href="https://www.google.com">Contact us</a></li>
                            <li><a className="text-muted" href="https://www.google.com">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md resources">
                        <h5>Partners</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://www.samsung.com/">Samsung</a></li>
                            <li><a className="text-muted" href="https://www.apple.com/">Apple</a></li>
                            <li><a className="text-muted" href="https://www.asus.com/">Asus</a></li>
                            <li><a className="text-muted" href="https://www.lenovo.com/">Lenovo</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md about">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://www.google.com">Bands</a></li>
                            <li><a className="text-muted" href="https://www.google.com">Our stores</a></li>
                            <li><a className="text-muted" href="https://www.google.com">More</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
