import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser, faCalendarDays, faMagnifyingGlass, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faSnapchat, faMicrosoft, faInstagram, faLinkedin, faSpotify, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTruckFast, faShieldHalved, faAnchor, faAward, } from '@fortawesome/free-solid-svg-icons'
import Slider from "../Slider/Slider";



function Home() {
    return (
        <>

            <Slider />

            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Latest Products</h1>
                        <p className="text-center">The Purpose Of Lorem Ipsum</p>
                    </div>
                    <div className="row" >
                        <div className="col">
                            <br />
                            <div class="container px-4">
                                <div class="row gx-5 text-center d-flex align-items-center justify-content-center">
                                    <div class="col-lg-2 col-md-6 col-sm-6 mb-2 ">
                                        <div style={{ padding: "10px 0px", border: "2px solid black", backgroundColor: "black", color: "white" }}><b>NEW ARRIVAL</b></div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-sm-6 mb-2">
                                        <div style={{ padding: "10px 0px", border: "2px solid black" }}><b>BEST SELLER</b></div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-sm-6 mb-2">
                                        <div style={{ padding: "10px 0px", border: "2px solid black" }}><b>TRENDING</b></div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-sm-6 mb-2" >
                                        <div style={{ padding: "10px 0px", border: "2px solid black" }}><b>SPECIAL OFFER</b> </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
            <br /><br />
            <div class="container ">
                <div class="row gx-1">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">
                            <div class="card" style={{ borderRadius: "0px" }} >
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">
                            <div class="card" style={{ borderRadius: "0px" }} >
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">

                            <div class="card" style={{ borderRadius: "0px" }}>
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
            <div class="container ">
                <div class="row gx-1">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">
                            <div class="card" style={{ borderRadius: "0px" }} >
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">
                            <div class="card" style={{ borderRadius: "0px" }} >
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="">

                            <div class="card" style={{ borderRadius: "0px" }}>
                                <img style={{ borderRadius: "0px" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                                    <a href="#" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", padding: "10px 25px", color: "white", textDecoration: "none" }}>Add to Chart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>What We Offer!</h1>
                        <p>The Purpose Of Online Shopping Center</p>

                    </div>

                </div>

            </div>
            <br /><br />
            <div className="container px-4">
                <div className="row gx-4 ">
                    <div className="col-lg-3 col-md-6 col-sm-12 "   >
                        <div className="p-3 border mb-3  bg-light border-dark border-4 border-top-0 border-end-0 border-start-0" id="row2" >
                            <br />
                            <FontAwesomeIcon icon={faTruckFast} size="2x" style={{ color: "" }} />
                            <br /><br />
                            <p>Super Fast and Free Deleivery</p>
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 "  >
                        <div className="p-3 border mb-3  bg-light border-dark border-4 border-top-0 border-end-0 border-start-0" id="row2" >
                            <br />
                            <FontAwesomeIcon icon={faShieldHalved} size="2x" style={{ color: "" }} />
                            <br />
                            <br />
                            <p>Non-contact Shipping</p>
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 "  >
                        <div className="p-3 border mb-3 border-dark border-4 border-top-0 border-end-0 border-start-0 bg-light" id="row2" >
                            <br />
                            <FontAwesomeIcon icon={faAnchor} size="2x" style={{ color: "" }} />
                            <br />
                            <br />
                            <p>Super Secure Payment</p>
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 "  >
                        <div className="p-3 border mb-3 border-dark border-4 border-top-0 border-end-0 border-start-0 bg-light" id="row2" >
                            <br />
                            <FontAwesomeIcon icon={faAward} size="2x" style={{ color: "" }} />
                            <br />
                            <br />
                            <p>Money-Back Guarenteed</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>


            <br /><br /> <br /><br />

            <div className="container">
                <div className="row" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <br />
                    <div className="col-lg-6 col-md-12 col-sm-12" ><br />
                        <img src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className=" img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" > <br />
                        <h1>New Features of Trending Products</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <hr />
                        <p>All the Lorem Ipsum generators on the Internet tend.</p>
                        <hr />
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <hr />
                        <p>There are many variations of passages available.</p>
                        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                <button type="button" id="btn1" class="btn  gx-2">Buy Now</button>
                                <button type="button" id="btn2" class="btn  gy-2 ms-3">View Detail</button>

                            </div>
                        </div>
<br />

                    </div>

                </div>
            </div>





            <br /><br /><br />







            {/* ....................................... */}
            <br /><br /> <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 id="Companies"><b>Trusted By 100+ Companies</b></h1>
                    </div>
                </div>
            </div>
            <br /><br />

            <div className="container px-4">
                <div className="row gx-3 ">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp; <span>Facebook</span></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faSnapchat} />&nbsp;&nbsp; <span>Snapchat</span></div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faMicrosoft} />&nbsp;&nbsp; <span>Microsoft</span></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp; <span>Linkdin</span></div>
                    </div>
                </div>

                <div className="row gx-3">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp; <span>Instagram</span>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faSpotify} />&nbsp;&nbsp; <span>Spotify</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faWhatsapp} />&nbsp;&nbsp; <span>Whatsapp</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp; <span>Twitter</span>
                        </div>
                    </div>

                </div>
            </div>

            <br /><br /> <br /><br /><br />

            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center" id="one"><br /><br /><br /><br />
                        <h1><b>Get Latest Update by <br />
                            Subscribe Our Newslater</b></h1>

                        <div className="row">
                            <div className="col-3 ">

                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 "><br />
                                <div class="input-group mb-3 ">
                                    <br />
                                    <input type="text" style={{ border: "2px solid black", backgroundColor: "transparent", borderRadius: "0px", padding: "10px 25px" }} class="form-control" placeholder="Email" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                                <button type="button" id="subscribebtn" class=" btn-lg btn-block">Subscribe</button>
                                <br /><br /><br /><br /><br />

                            </div>
                            <div className="col-3">

                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <br /><br /><br />

            <div className="container">

                <div className="row text-center">
                    <div className="col">
                        <h3 > <b>Latest Blog</b></h3>
                        <p>Check Our Latest News</p>
                    </div>
                </div>
                <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div class=" border bg-light">
                                <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-100 w-100" alt="" />
                                <div className="row p-3">
                                    <div className="col p-3">
                                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;<label htmlFor="">Virendra</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;&nbsp;<label htmlFor="">15 Aug,2021</label>
                                        <br /><br />
                                        <h3>Blog title here</h3>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <button style={{ backgroundColor: "black", border: "0px", color: "white", padding: "10px 30px" }}>Read More</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div class=" border bg-light">
                                <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-100 w-100" alt="" />
                                <div className="row p-3">
                                    <div className="col p-3">
                                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;<label htmlFor="">Virendra</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;&nbsp;<label htmlFor="">15 Aug,2021</label>
                                        <br /><br />
                                        <h3>Blog title here</h3>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <button style={{ backgroundColor: "black", border: "0px", color: "white", padding: "10px 30px" }}>Read More</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div class=" border bg-light">
                                <img src="https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-100 w-100" alt="" />
                                <div className="row p-3">
                                    <div className="col p-3">
                                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;<label htmlFor="">Virendra</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;&nbsp;<label htmlFor="">15 Aug,2021</label>
                                        <br /><br />
                                        <h3>Blog title here</h3>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <button style={{ backgroundColor: "black", border: "0px", color: "white", padding: "10px 30px" }}>Read More</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
export default Home

