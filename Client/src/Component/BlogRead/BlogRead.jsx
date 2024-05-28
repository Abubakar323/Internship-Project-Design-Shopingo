import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./BlogRead.css"

import { faComment, faUser, faCalendarDays, faMagnifyingGlass, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function BlogRead() {
    return (
        <div>

            <br /><br />

            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-lg-8 col-md-12 col-sm-12 mb-3">
                        <div class=" border bg-light">
                            <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-100 w-100" alt="" />
                            <br />
                            <div className='row'>
                                <div className='col ' style={{ padding: "10px 30px" }}>
                                    <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;<label htmlFor="">Virendra</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} />&nbsp;&nbsp;&nbsp;<label htmlFor="">Comments</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;&nbsp;<label htmlFor="">15 Aug,2021</label>
                                    <br /><br />
                                    <h1 style={{ fontSize: "30px" }}>Blog title here</h1>
                                    <br />
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </p><br />
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <br />
                                    <p>Nullam non felis odio. Praesent aliquam magna est, nec volutpat quam aliquet non. Cras ut lobortis massa, a fringilla dolor. Quisque ornare est at felis consectetur mollis. Aliquam vitae metus et enim posuere ornare. Praesent sapien erat, pellentesque quis sollicitudin eget, imperdiet bibendum magna. Aenean sit amet odio est.</p>
                                    <br />
                                    <hr />
                                    <br />

                                    <div className='row text-center'>
                                        <div className='col'>
                                            <label style={{ fontSize: "25px" }}>Share This Post</label><label htmlFor=""> </label><br /><br />
                                            <FontAwesomeIcon icon={faFacebookF} id='icon' />&nbsp;&nbsp; <FontAwesomeIcon icon={faInstagram} id='icon' />&nbsp;&nbsp; <FontAwesomeIcon icon={faLinkedin} id='icon' />&nbsp;&nbsp; <FontAwesomeIcon icon={faTwitter} id='icon' /> &nbsp;&nbsp; <FontAwesomeIcon icon={faYoutube} id='icon' />

                                        </div>

                                    </div>
                                    <br />
                                    <hr />
                                    <p className='p-3'>
                                        Jhon Doe <br />
                                        Donec egestas metus non vehicula accumsan. Pellentesque sit amet tempor nibh. Mauris in risus lorem. Cras malesuada gravida massa eget viverra.
                                    </p>

                                    <div className="container overflow-hidden">
                                        <div className="row gx-5">
                                            <div className="col">
                                                <div className="p-3 border bg-light">
                                                    <h1 style={{ fontSize: "25px" }}><b>Leave a Reply</b> </h1><br />
                                                    <p>Your email address will not be published. Required fields are marked *</p><br />
                                                    <label style={{ fontSize: "20px" }}>Comment</label>
                                                    <div className="form-floating">
                                                        <textarea className="form-control mt-2 mb-2" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px", borderRadius: "0px" }}></textarea>
                                                    </div>
                                                    <label style={{ fontSize: "20px" }}>Name</label>
                                                    <div class="input-group mb-3">
                                                        <input type="text" className="form-control mt-2 mb-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>

                                                    <label style={{ fontSize: "20px" }}>Email</label>
                                                    <div class="input-group mb-3 mb-2">
                                                        <input type="text" className="form-control mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>

                                                    <label style={{ fontSize: "20px" }}>Website</label>
                                                    <div class="input-group mb-3 mb-2">
                                                        <input type="text" className="form-control mt-2" style={{ borderRadius: "0px" }} aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>

                                                    <button type="button" style={{ backgroundColor: "black", padding: "10px 30px", color: "white" }}>Post Comment</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="p-4 border bg-light">
                            <div class="input-group mb-3 border">
                                <span class="input-group-text" style={{ backgroundColor: "transparent", border: "0px" }} id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                <input type="text" class="form-control p-3" placeholder="Username" aria-label="Username" style={{ backgroundColor: "transparent", border: "0px" }} aria-describedby="basic-addon1" />
                            </div>
                            <h1 style={{ fontSize: "25px" }}>Blog Categories</h1>
                            <br />
                            <FontAwesomeIcon className='mt-3 ms-3' icon={faChevronRight} />&nbsp;&nbsp;&nbsp; <label>Fashsion</label><br /><br /><hr />
                            <FontAwesomeIcon className='mt-3 ms-3' icon={faChevronRight} />&nbsp;&nbsp;&nbsp; <label>Electronic</label><br /><br /><hr />
                            <FontAwesomeIcon className='mt-3 ms-3' icon={faChevronRight} />&nbsp;&nbsp;&nbsp; <label>Accessories</label><br /><br /><hr />
                            <FontAwesomeIcon className='mt-3 ms-3' icon={faChevronRight} />&nbsp;&nbsp;&nbsp; <label>Kitchen & Table</label><br /><br /><hr />
                            <FontAwesomeIcon className='mt-3 ms-3' icon={faChevronRight} />&nbsp;&nbsp;&nbsp; <label>Furniture</label><br /><br /><hr />
                            <br />
                            <h2 style={{ fontSize: "25px" }}>Recent Posts</h2>
                            <br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <p >Post title Here</p>
                                    <p >March 15,2021</p>
                                </div>
                                <br />
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <p >Post title Here</p>
                                    <p >March 15,2021</p>
                                </div>
                                <br />
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className='row'>
                                <div className='col-6'>
                                    <img src="https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-100 w-100' alt="" />
                                </div>
                                <div className='col-6'>
                                    <p >Post title Here</p>
                                    <p >March 15,2021</p>
                                </div>
                                <br />
                            </div>
                            <br />
                            <hr />

                            <br />
                            <h2 style={{ fontSize: "25px" }}>Popular Tags</h2>
                            <div class="container px-4">
                                <div class="row gx-5">
                                    <div class="col-6  ">
                                        <div class=" mt-3 ">

                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Cloths</button>
                                        </div>
                                    </div>
                                    <div class="col-6 ">
                                        <div class="mt-3  ">
                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Electronics</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-5">
                                    <div class="col-6  ">
                                        <div class=" mt-3 ">

                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Furniture</button>
                                        </div>
                                    </div>
                                    <div class="col-6 ">
                                        <div class="mt-3  ">
                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Shoes</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-5">
                                    <div class="col-6  ">
                                        <div class=" mt-3 ">

                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Man'Were</button>
                                        </div>
                                    </div>
                                    <div class="col-6 ">
                                        <div class="mt-3  ">
                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Laptops</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-5">
                                    <div class="col-6 ">
                                        <div class=" mt-3 ">

                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>TopWere</button>
                                        </div>
                                    </div>
                                    <div class="col-6 ">
                                        <div class="mt-3 ">
                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>HeadPhone</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-5">
                                    <div class="col ">
                                        <div class=" mt-3 ">

                                            <button style={{ border: "2px solid black", padding: "10px 25px" }}>Formal Shirt</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />


        </div>
    )
}

export default BlogRead

