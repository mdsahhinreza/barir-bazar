import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-dark text-light py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>Barir Bazar</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <div className="col-md-3">

                        <h4>Usefull Link</h4>
                        <ul>
                            <li>About</li>
                            <li>Cases</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>


                    </div>
                    <div className="col-md-3">
                        <h4>Contact Now</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Subscribe</h4>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer