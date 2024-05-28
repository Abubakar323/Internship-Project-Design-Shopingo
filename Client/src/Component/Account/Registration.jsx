import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'


function Registration() {
    return (
        <div>
            <br /><br />
            <div class="container px-4">
                <div class="row gx-5 d-flex align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 ">
                        <div class="p-3 border bg-light">
                            <h1 className='text-center' style={{ fontSize: "30px" }}><b>Registration</b></h1><br /><hr /><br />
                            <div class="row gx-5 text-center">
                                <div class="col">
                                    <div class="p-3 " style={{ backgroundColor: "#3b5998", color: "white" }}>
                                        <FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp;<label>FaceBook</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3 " style={{ backgroundColor: "#c8232c", color: "white" }}>
                                        <FontAwesomeIcon icon={faGoogle} /><label>&nbsp;&nbsp;Google</label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <p className='text-center'>OR</p>
                            <hr />
                            <br />

                            <label style={{ fontSize: "20px" }}>Name</label>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control p-2 mt-2 mb-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <label style={{ fontSize: "20px" }}>Moile</label>
                            <div class="input-group mb-3 mb-2">
                                <input type="number" className="form-control p-2 mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <label style={{ fontSize: "20px" }}>Email</label>
                            <div class="input-group mb-3 mb-2">
                                <input type="email" className="form-control p-2 mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <label style={{ fontSize: "20px" }}>Password</label>
                            <div class="input-group mb-3 mb-2">
                                <input type="password" className="form-control p-2 mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <input type="checkbox" className='mb-4' /> <label htmlFor=""> &nbsp;&nbsp; I agree to Terms and Conditions</label>
                            <hr /><br />
                        <button className='w-100 mt-3' style={{backgroundColor:"black",color:"white",padding:"15px 25px" }}>Sign Up</button>
                        <br />
                        <label className='mt-4 d-flex align-items-center justify-content-center'>Already have an account? <span style={{color:"#c8232c"}}>Sign In</span></label> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
