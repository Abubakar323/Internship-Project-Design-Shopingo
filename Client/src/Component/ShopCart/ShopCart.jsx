import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons'
import './ShopCart.css'
function ShopCart() {
    return (
        <>
<br /><br />
            <div class="container px-4">
                <div class="container">
                    <div class="row border">
                        <div class="col-lg-6 col-md-12 col-sm-12 p-3  bg-light d-flex justify-content-center align-items-center">
                            <h1 style={{ fontSize: "20px" }}><b>My Bag (8 items)</b></h1>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 p-3  bg-light d-flex justify-content-center align-items-center">
                            <button style={{ backgroundColor: "black", padding: "10px 25px", color: "white" }}>CONTINUE SHOPPING</button>
                        </div>

                    </div>
                </div>
                <br />
                <div class="row gx-5">

                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="p-3 border bg-light" >
                            <br />
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12 mb-2'>
                                    <img src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-12 col-sm-12 mb-2'>
                                    <h1 className='ms' style={{ fontSize: "25px" }}><b>AKS - Checked Straight Kurta</b></h1>
                                    <p>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;(70% off)</p>
                                    <br />
                                    <button id='btn1' >Size:M</button>
                                    <button className='ms-3' id='btn1' >Qty:1</button>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12 mb-2 border-start  '>
                                    <button className='mt-2 ' id='btn' ><FontAwesomeIcon icon={faXmark} /> &nbsp;Remove</button>
                                    <button className='mt-3' id='btn' ><FontAwesomeIcon icon={faHeart} /> &nbsp;Move to WishList</button>
                                </div>
                            </div>
                            <br />
                        </div><br />
                        <div class="p-3 border bg-light" >
                            <br />
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12 mb-2'>
                                    <img src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-12 col-sm-12 mb-2'>
                                    <h1 className='ms' style={{ fontSize: "25px" }}><b>AKS - Checked Straight Kurta</b></h1>
                                    <p>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;(70% off)</p>
                                    <br />
                                    <button id='btn1' >Size:M</button>
                                    <button className='ms-3' id='btn1' >Qty:1</button>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12 mb-2 border-start '>
                                    <button className='mt-2' id='btn' ><FontAwesomeIcon icon={faXmark} /> &nbsp;Remove</button>
                                    <button className='mt-3' id='btn' ><FontAwesomeIcon icon={faHeart} /> &nbsp;Move to WishList</button>
                                </div>
                            </div>
                            <br />
                        </div><br />
                        <div class="p-3 border bg-light" >
                            <br />
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12 mb-2'>
                                    <img src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-12 col-sm-12 mb-2'>
                                    <h1 className='ms' style={{ fontSize: "25px" }}><b>AKS - Checked Straight Kurta</b></h1>
                                    <p>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;(70% off)</p>
                                    <br />
                                    <button id='btn1' >Size:M</button>
                                    <button className='ms-3' id='btn1' >Qty:1</button>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12 mb-2 border-start '>
                                    <button className='mt-2' id='btn' ><FontAwesomeIcon icon={faXmark} /> &nbsp;Remove</button>
                                    <button className='mt-3' id='btn' ><FontAwesomeIcon icon={faHeart} /> &nbsp;Move to WishList</button>
                                </div>
                            </div>
                            <br />
                        </div><br />
                        <div class="p-3 border bg-light" >
                            <br />
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12 mb-2'>
                                    <img src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-12 col-sm-12 mb-2'>
                                    <h1 className='ms' style={{ fontSize: "25px" }}><b>AKS - Checked Straight Kurta</b></h1>
                                    <p>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;(70% off)</p>
                                    <br />
                                    <button id='btn1' >Size:M</button>
                                    <button className='ms-3' id='btn1' >Qty:1</button>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12 mb-2 border-start '>
                                    <button className='mt-2' id='btn' ><FontAwesomeIcon icon={faXmark} /> &nbsp;Remove</button>
                                    <button className='mt-3' id='btn' ><FontAwesomeIcon icon={faHeart} /> &nbsp;Move to WishList</button>
                                </div>
                            </div>
                            <br />
                        </div><br />
                        <div class="p-3 border bg-light" >
                            <br />
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12 mb-2'>
                                    <img src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-12 col-sm-12 mb-2'>
                                    <h1 className='ms' style={{ fontSize: "25px" }}><b>AKS - Checked Straight Kurta</b></h1>
                                    <p>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;(70% off)</p>
                                    <br />
                                    <button id='btn1' >Size:M</button>
                                    <button className='ms-3' id='btn1' >Qty:1</button>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12 mb-2 border-start '>
                                    <button className='mt-2' id='btn' ><FontAwesomeIcon icon={faXmark} /> &nbsp;Remove</button>
                                    <button className='mt-3' id='btn' ><FontAwesomeIcon icon={faHeart} /> &nbsp;Move to WishList</button>
                                </div>
                            </div>
                            <br />
                        </div><br />
                    </div>


                    <div class="col-lg-4 col-md-12 c0l-sm-12">
                        <div class="p-3 border bg-light">

                            <br />
                            <div className="row gx-3">
                                <div className="col">
                                    <p style={{ fontSize: "25px" }}><b>Order Summary</b></p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col">
                                    <p>Bag Total</p>
                                </div>
                                <div className="col text-center">
                                    <p>$599.00</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p>Bag discount</p>
                                </div>
                                <div className="col text-center">
                                    <p>- $178.00</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p>Delivery</p>
                                </div>
                                <div className="col text-center">
                                    <p>$29.00</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p><b>Total Amount</b></p>
                                </div>
                                <div className="col text-center">
                                    <p>$393.00</p>
                                </div>

                            </div><br /><br />
                            <div className='row'>
                                <div className='col'>
                                    <button className='bg-dark w-100 p-3 text-white'>Place Order</button>

                                </div>

                            </div>

                        </div>
                        <div className='container'>
                            <div className='row bg-light mt-2 border p-3'>
                                <div className='col'>
                                    <h1 style={{ fontSize: "20px" }}><b>Apply Coupon</b></h1>
                                    <br />
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Coupon Code" style={{ borderRadius: "0px" }} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text bg-dark text-white" style={{ borderRadius: "0px" }} id="basic-addon2">APPLY</span>
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

export default ShopCart

