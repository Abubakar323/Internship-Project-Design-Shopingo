import React from "react";
import img from '../../image/two.jpg'
// import img2 from '../../images/one.jpg'
import img2 from '../../image/One.jpg'
import img3 from '../../image/mobile.jpg'
import perfume from '../../image/perfume.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faShieldHalved, faAnchor, faAward, } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'



export default function About() {
    return (
        <>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h2>Our Story</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <br />
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.</p>
                    <br />
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
                    
                    
                    
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src="https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-100 w-100" alt="" />

                    </div>

                </div>

            </div>

<br /><br />
<br />
<div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1><b>Why Choose Us</b></h1>
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
<br /><br /><br />
            <div class="container" >
                <div class="row">
                    <div class="col text-center" style={{ marginTop: "80px;" }}>
                        <h1><b>JOURNEY START FROM</b></h1><br />
                        <p>
                            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."</p>
                        <br /><br />
                        <img src={img} class="image-fluid" width="100%" alt="" />
                    </div>
                </div>
            </div>

            <div class="container" >
                <div class="row">
                    <div class="col text-center" style={{ marginTop: "80px;" }}> <br /><br />
                        <h1><b>2022</b></h1><br />
                        <p>
                            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."</p>
                        <br /><br />

                        <div className="row" >
                            <div className="col">
                                <video src={perfume} style={{ width: "100%" }} controls></video>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <br /><br /> <br />
            <br />

            <div class="container-fluid">
                <div class="row" >
                    <div class="col-sm-12 col-md-6 col-lg-4  mt-4 mb-3" > <br /><br />
                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "70px" }} />
                        <br /><br /><h1><b>GET INSPIRED WITH INSTAGRAM</b></h1><br />
                        <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation.</p><br />
                        <a href="" style={{ backgroundColor: "black", color: "white", padding: "10px 25px ", borderRadius: "50px", textDecoration: "none" }}>DISCOVER MORE</a>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4  mt-4 mb-3 " >
                        <img src={img2} width="100%" height="100%" alt="" />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mt-4">
                        <img src={img3} width="90%" height="100%" alt="" />
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    );
}