import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar, faHeart, faCartShopping, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

function ProductDetail() {
    return (
        <>
<br /><br /><br />
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="p-3 border bg-light">
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/01.jpg" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/02.jpg" className='h-100 w-100' alt="" />
                                </div>
                            </div><br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/03.jpg" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/04.jpg" className='h-100 w-100' alt="" />
                                </div>
                            </div><br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/05.jpg" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/06.jpg" className='h-100 w-100' alt="" />
                                </div>
                            </div>

                            <br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/07.jpg" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/product-images/08.jpg" className='h-100 w-100' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="p-3 border bg-light">
                            <h1 style={{ fontSize: "25px" }}><b>Check Pink Kurta</b></h1>
                            <p className='mt-3 mb-3'>Women Pink & Off-White Printed Kurta with Palazzos</p>
                            <p>4.8 <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> 162 Ratings</p>
                            <br />
                            <hr />
                            <br />
                            <p><b>$458</b> &nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                            <p style={{ color: "green" }} className='mt-2 mb-3'><b>inclusive of all taxes</b></p>
                            <h3 style={{ fontSize: '15px' }}><b>More Colors</b></h3>
                            <div className='row mt-3'>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/01.webp" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/04.webp" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/03.webp" className='h-100 w-100  img-fluid' alt="" />
                                </div>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/02.webp" className='h-100 w-100  img-fluid' alt="" />
                                </div>

                            </div>
                            <h3 style={{ fontSize: "15px" }} className='mt-3'><b>Select Size</b></h3>
                            <button className='mt-3 ms-2' style={{ padding: "11px 15px", border: "2px solid black", borderRadius: "50px" }}>XS</button>
                            <button className='mt-3 ms-2' style={{ padding: "11px 18px", border: "2px solid black", borderRadius: "50px" }}>S</button>
                            <button className='mt-3 ms-2' style={{ padding: "12px 18px", border: "2px solid black", borderRadius: "50px" }}>M</button>
                            <button className='mt-3 ms-2' style={{ padding: "12px 19px", border: "2px solid black", borderRadius: "50px" }}>L</button>
                            <button className='mt-3 ms-2' style={{ padding: "12px 15px", border: "2px solid black", borderRadius: "50px" }}>XL</button>
                            <button className='mt-3 ms-2' style={{ padding: "15px 15px", border: "2px solid black", borderRadius: "50px" }}>XXL</button>

                            <div className='row mt-4'>
                                <div className='col'>
                                    <button style={{ backgroundColor: "black", color: "white", border: "2px solid black", padding: "15px 25px" }} className='w-100 '><FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;ADD To BAG</button>
                                </div>
                                <div className='col'>
                                    <button style={{ backgroundColor: "transparent", color: "black", border: "2px solid black", padding: "15px 25px" }} className='w-100 ' ><FontAwesomeIcon style={{ color: 'black' }} icon={faHeart} />&nbsp;&nbsp;WISHLIST</button>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h2 className='mb-2'><b>Product Details</b></h2>
                            <p>There are many variations of passages of Lorem Ipsum All the Lorem Ipsum generators on the Internet tend to repeat</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                            <br /><hr />
                            <br />
                            <h2 className='mb-3'><b>Customer Ratings</b></h2>
                            <div className='row'>
                                <div className='col-lg-4 col-md-12 col-sm-12'>
                                    <p><span style={{ fontSize: "30px" }}><b>4.8</b></span> <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> 3.8k Verified Buyers</p>
                                </div>
                                <div className='col-lg-8 col-md-12 col-sm-12 '>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <span>5 &nbsp;&nbsp;<FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> </span>
                                        </div>
                                        <div className='col-7'>
                                            <div class="progress mt-3" style={{ height: "5px" }}>
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            1528
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <span>5 &nbsp;&nbsp;<FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> </span>
                                        </div>
                                        <div className='col-7'>
                                            <div class="progress mt-3" style={{ height: "5px" }}>
                                                <div class="progress-bar bg-secondary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            253
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <span>5 &nbsp;&nbsp;<FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> </span>
                                        </div>
                                        <div className='col-7'>
                                            <div class="progress mt-3" style={{ height: "5px" }}>
                                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            258
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <span>5 &nbsp;&nbsp;<FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} /> </span>
                                        </div>
                                        <div className='col-7'>
                                            <div class="progress mt-3" style={{ height: "5px" }}>
                                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            78
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h2 style={{ fontSize: "20px" }}><b>Customer Reviews (875)</b></h2>

                            <div className='row'>
                                <div className='col'>
                                    <br />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <p>This is some content from a media component. You can replace this with any content and adjust it as needed. Some quick example text to build on the card title and make.
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp" className='h-100 w-100' alt="" />

                                </div>

                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    Jhon Deo
                                </div>
                                <div className='col'>
                                    15 June 2020
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;58
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsDown} /> &nbsp;&nbsp; 19
                                </div>

                            </div><br /><hr /><br />

                            <div className='row'>
                                <div className='col'>
                                    <br />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <p>This is some content from a media component. You can replace this with any content and adjust it as needed. Some quick example text to build on the card title and make.
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp" className='h-100 w-100' alt="" />

                                </div>

                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    Jhon Deo
                                </div>
                                <div className='col'>
                                    15 June 2020
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;58
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsDown} /> &nbsp;&nbsp; 19
                                </div>

                            </div><br /><hr /><br />
                            <div className='row'>
                                <div className='col'>
                                    <br />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <p>This is some content from a media component. You can replace this with any content and adjust it as needed. Some quick example text to build on the card title and make.
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp" className='h-100 w-100' alt="" />

                                </div>

                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    Jhon Deo
                                </div>
                                <div className='col'>
                                    15 June 2020
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;58
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsDown} /> &nbsp;&nbsp; 19
                                </div>

                            </div><br /><hr /><br />
                            <div className='row'>
                                <div className='col'>
                                    <br />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                    <FontAwesomeIcon className='ms-2' style={{ color: 'yellow' }} icon={faStar} />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <p>This is some content from a media component. You can replace this with any content and adjust it as needed. Some quick example text to build on the card title and make.
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-3'>
                                    <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp" className='h-100 w-100' alt="" />

                                </div>

                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    Jhon Deo
                                </div>
                                <div className='col'>
                                    15 June 2020
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;58
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faThumbsDown} /> &nbsp;&nbsp; 19
                                </div>

                            </div><br /><hr /><br />
                            <button style={{padding:"10px 25px ",backgroundColor:"black",color:'white'}} className='w-100'>View All Review </button>
                        </div>
                    </div>
                </div>
            </div>
<br /><br />


<div className='container px-4'>
                <div className="container"><br /><br />
                    <div className="row border ">
                        <div className="col p-3  bg-light d-flex align-items-center ">
                            <h1 style={{ fontSize: "20px" }} className='text-center'><b>Similar Product</b></h1>
                        </div>

                    </div><br /><br />
                    <div className='row'>
                        <div class="container px-4">
                            <div class="row gx-5">
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                    <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row gx-5">
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                    <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="row gx-5">
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                    <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="p-3 border bg-light">
                                        <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp" className='h-100 w-100' alt="" />
                                        <h4 className='text-center mt-3'>Color Printed Kurta</h4>
                                        <p className='mt-2 text-center'>$458 &nbsp;&nbsp; <strike>$2089</strike> &nbsp;&nbsp;<span style={{ color: "red" }}>(70% off)</span></p>
                                        <br />
                                        <hr />
                                        <div className='row'>
                                            <div className='col d-flex justify-content-center align-items-center mt-3'>
                                                <button className='w-100' style={{ padding: "10px 25px" }}>MOVE TO BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div class="col">
                                
                                    </div>
                                <div class="col">
                               
                                </div>
                            </div>
                </div>

            </div>

        </>
    )
}

export default ProductDetail
