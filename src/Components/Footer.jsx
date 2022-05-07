import React from 'react'
import { Link } from 'react-router-dom';

function  Footer() {
    return (
        <>
             <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><Link to="/about">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="/about">FAQ's</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <Link to="/about"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="/about"><i className="fab fa-instagram"></i></Link>
                                <Link to="/about"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;