import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ShopGrid() {
    return (
        <>
        <br /><br />
            <div class="container-fluid px-4">
                <div class="row gx-5">
                    <div class="col-lg-3 col-md-12 col-sm-12 mb-3">
                        <div class="p-3 border bg-light">
                            <h2 style={{ fontSize: "20px" }}><b>Filters</b></h2><br /><hr /><br />
                            <h2 className='mb-3' style={{ fontSize: "20px" }}><b>Categories</b></h2>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Shirts(1548)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Jeans(568)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Kurtas(784)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Shirts(1548)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Makeup(1789)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Shoes(358)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Heels(572)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Lehenga(754)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Laptops(541)
                                </label>
                            </div>

                            <br /><hr /><br />

                            <h2 style={{ fontSize: "20px" }}><b>Brands</b></h2>
                            <br />
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Samsung(1548)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Sony(478)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Microsoft(689)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Reebok(987)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Adidas(358)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Puma(5682)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Ajio(5712)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; Motorola(657)
                                </label>
                            </div>
                            <br /><hr /><br />
                            <h2 style={{ fontSize: "20px" }}><b>Price</b></h2>
                            <br />
                            <div className='row'>
                                <div className='col-5'>
                                    <input type="text" placeholder='$10' style={{ padding: "10px 10px", width: "60px" }} />  &nbsp;to
                                </div>
                                <div className='col'>
                                    <input type="text" placeholder='$10' style={{ padding: "10px 10px", width: "60px" }} />
                                </div>
                                <div className='col'>
                                    <button style={{ backgroundColor: "black", padding: "10px 10px", color: "white" }}><FontAwesomeIcon icon={faChevronRight} /></button>

                                </div>
                            </div>
                            <br /><hr /><br />
                            <h2 style={{ fontSize: "20px" }}><b>Colors</b></h2><br />

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "red" }}>
                                    &nbsp; Red(845)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "blue" }}>
                                    &nbsp; Blue(257)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" color='yellow'>
                                    &nbsp; Yellow(968)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "green" }}>
                                    &nbsp; Green(478)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "purple" }}>
                                    &nbsp; Purple(897)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "orange" }}>
                                    &nbsp; Orange(68)
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ color: "brown" }}>
                                    &nbsp; Brown(532)
                                </label>
                            </div>
                            <br /><hr /><br />

                            <h2 style={{ fontSize: "20px" }}><b>Discount Range</b></h2><br />
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 10% and Above
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 20% and Above
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 30% and Above
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 40% and Above
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 50% and Above
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" >
                                    &nbsp; 60% and Above
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="">
                            <div class="container px-4">
                                <div class="row gx-5">
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/04.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/05.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row gx-5">
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row gx-5">
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row gx-5">
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row gx-5">
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 mb-2">
                                        <div class="p-3 border bg-light">
                                            <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/03.webp" className='h-100 w-100' alt="" />
                                            <h2 style={{ fontSize: "15px" }}><b>Syndrona</b></h2>
                                            <p className='mt-2 mb-2'>Color Printed Kurta</p>
                                            <p ><b>$458</b>&nbsp;&nbsp;<strike>$2089</strike>&nbsp;&nbsp;<span style={{ color: "red" }}><b>(70% off)</b></span></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div className='row '>
                                    <div className='col d-flex align-items-center justify-content-center'>
                                        <button style={{padding:"10px 20px",border:"2px solid black"}} className='ms-2'>Previous</button>
                                        <button style={{padding:"10px 20px",border:"2px solid black"}} className='ms-2'>1</button>
                                        <button style={{padding:"10px 20px",border:"2px solid black"}} className='ms-2'>2</button>
                                        <button style={{padding:"10px 20px",border:"2px solid black"}} className='ms-2'>3</button>
                                        <button style={{padding:"10px 20px",border:"2px solid black"}} className='ms-2'>Next</button>

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

export default ShopGrid
