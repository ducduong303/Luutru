import React from 'react';
import logo from "../assets/images/logo.png"
import { GrMap, GrFacebookOption } from 'react-icons/gr';
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { FiPhone, FiInstagram } from 'react-icons/fi';
import { FaPinterestSquare } from 'react-icons/fa';
function Footer(props) {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="footer__item">
                                <img src={logo} alt="" />
                                <p><GrMap size={20}></GrMap> <span>184 Main Rd E, St Albans VIC 3021, Australia</span></p>
                                <p><AiOutlineMail size={20} /> <span>contact@company.com</span></p>
                                <p><FiPhone size={20} /> <span> +001 2233 456</span></p>
                                <ul className="footer__social">
                                    <li><GrFacebookOption size={15} /></li>
                                    <li><AiOutlineTwitter size={15} /></li>
                                    <li><FiInstagram size={15} /></li>
                                    <li><FaPinterestSquare size={15} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="footer__item">
                                <h3>Categories</h3>
                                <ul className="footer__menu">
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Accessories</li>
                                    <li>Shoes</li>
                                    <li>Denim</li>
                                    <li>Dress</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="footer__item">
                                <h3>Infomation</h3>
                                <ul className="footer__menu">
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Terms & Conditions</li>
                                    <li>Returns & Exchanges</li>
                                    <li>Shipping & Delivery</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-md-3">
                            <div className="footer__item">
                                <h3>Useful links</h3>
                                <ul className="footer__menu">
                                    <li>Store Location</li>
                                    <li>Latest News</li>
                                    <li>My Account</li>
                                    <li>Size Guide</li>
                                    <li>FAQs 2</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__item">
                                <h3>Newsletter Signup</h3>
                                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                                <div className="footer__form">
                                    <input type="text" placeholder="Your email address" />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row footer__bottom-box">
                        <div className="col-lg-6 col-md-6 footer__bottom-item">
                            <p>Copyright © 2020 BOUTIQUE all rights reserved. Powered by The4</p>
                        </div>
                        <div className="col-lg-6 col-md-6 footer__bottom-item">
                            <ul>
                                <li>Shop</li>
                                <li>About US</li>
                                <li>Contact</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Footer;