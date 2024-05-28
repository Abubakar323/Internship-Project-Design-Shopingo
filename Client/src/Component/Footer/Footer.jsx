import React from 'react'
import Logo from '../../image/logo1.webp'
import appstore from '../../image/appstore.png'
import googleplay from '../../image/googleplay.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

function Footer1() {
    return (
        <>
            <div className='container-fluid p-5 bg-light' id='ab' >
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3' >
                        <img src={Logo} className='w-50 h-20' alt="" />
                        <br /><br />
                        <h3 style={{ fontSize: "25px" }}><b>About Us</b></h3>
                        <br />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <br />
                        <button style={{ backgroundColor: "black", padding: "10px 25px", color: "white" }}>See More</button>

                        <br />
                        <br />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3' >
                        <h1 style={{ fontSize: "25px" }}><b>Explore</b></h1><br />
                        <ul style={{ listStyle: "none" }}>
                            <li className='mb-3'>Fashion</li>
                            <li className='mb-3'>Women</li>
                            <li className='mb-3'>Furniture</li>
                            <li className='mb-3'>Shoes</li>
                            <li className='mb-3'>Towear</li>
                            <li className='mb-3'>Brand</li>
                            <li className='mb-3'>Kids</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3' >
                        <h1 style={{ fontSize: "25px" }}><b>Company</b></h1><br />
                        <ul style={{ listStyle: "none" }}>
                            <li className='mb-3'>About Us</li>
                            <li className='mb-3'>Contact Us</li>
                            <li className='mb-3'>FAQ</li>
                            <li className='mb-3'>Privacy</li>
                            <li className='mb-3'>Terms</li>
                            <li className='mb-3'>Complaints</li>

                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3' >
                        <h1 style={{ fontSize: "25px" }}><b>Follow Us</b></h1><br />
                        <div className='row text-center'>
                            <div className='col'>
                                <FontAwesomeIcon icon={faFacebookF} id='icon' style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid black" }} />&nbsp;&nbsp; <FontAwesomeIcon id='icon' icon={faInstagram} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid black" }} />&nbsp;&nbsp; <FontAwesomeIcon id='icon' icon={faLinkedin} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid black" }} />&nbsp;&nbsp; <FontAwesomeIcon icon={faTwitter} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid black" }} id='icon' /> &nbsp;&nbsp;

                            </div>

                        </div>
                        <br />
                        <h2 style={{ fontSize: "20px" }} className='mb-3'><b>Support</b></h2>
                        <p>support@example.com</p><br />
                        <h2 style={{ fontSize: "20px" }} className='mb-3'><b>Toll Free</b></h2>
                        <p>1800- 8xx 2xx</p>
                    </div>

                </div>
                <br />
                <div className='row'>
                    <div className='col text-center' >
                        <h1 style={{ fontSize: "25px" }}><b>Download Mobile App</b></h1>
                    </div><br /><br />
                    <div className='row'>
                        <div className='col-lg-3  d-flex justify-content-end'>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center' >
                            <img src={appstore} style={{ borderRadius: "10px" }} className='h-75 w-50' alt="" />
                            &nbsp;&nbsp; <img src={googleplay} className='h-75 w-50' style={{ borderRadius: "10px" }} alt="" />

                        </div>
                        <div className='col-3 d-flex justify-content-end' >

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer1
