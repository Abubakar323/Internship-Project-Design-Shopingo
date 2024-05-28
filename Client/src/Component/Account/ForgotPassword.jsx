import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function ForgotPassword() {
    return (
        <>
            <br /><br />
            <div class="container px-4">
                <div class="row gx-5 d-flex align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="p-3 border bg-light">
                            <h1 className='text-center' style={{ fontSize: "30px" }}><b>Reset Password</b></h1><br /><hr /><br />
                            <label style={{ fontSize: "20px" }}>New Password</label>
                            <div class="input-group mb-3">
                                <input type="password" className="form-control p-2 mt-2 mb-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <label style={{ fontSize: "20px" }}>Confirm Password</label>
                            <div class="input-group mb-3 mb-2">
                                <input type="password" className="form-control p-2 mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button className='w-100 mt-3' style={{ backgroundColor: "black",border:"0px", color: "white", padding: "15px 25px" }}>CHANGE PASSWORD</button>
                            <button className='w-100 mt-3' style={{ backgroundColor: "black",border:"0px", color: "white", padding: "15px 25px" }}> <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;&nbsp;RETRUN TO LOGIN</button>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
