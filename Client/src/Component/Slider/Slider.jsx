import React from 'react'
import carouselman  from '../../image/carouselman.png'
import Electronic from '../../image/Electronic.png'
import Child from '../../image/Child.png'
function Slider() {
  return (
    <div>
      {/* Carousel */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner " style={{backgroundColor:"#101820FF"}}>
    <div className="carousel-item active">
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column ">
          <div className="carousel-text  d-flex justify-content-center align-items-start flex-column" >
            <h3 className='text-white'>Has just Arrived</h3>
            <h1 className='text-white'>Huge Summer Collection</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Swimwear, Shorts, Trousers & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_2.webp" className="d-block w-100 img-fluid" alt="man" />
        </div>
      </div>
    </div>
    <div className="carousel-item " style={{backgroundColor:"#124559"}}>
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column">
          <div className="carousel-text d-flex justify-content-center align-items-start flex-column">
            <h3 className='text-white'>Hurry up! Limited time offer</h3>
            <h1 className='text-white'>Electronics Items</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Sneakers, Sweatshirts, Hoodies & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_4.webp" className="d-block w-100 img-fluid" alt="woman" />
        </div>
      </div>
    </div>
    <div className="carousel-item " style={{backgroundColor:"#F2AA4CFF"}} >
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column">
          <div className="carousel-text d-flex justify-content-center align-items-start flex-column">
            <h3 className='text-white'>Complete your look with</h3>
            <h1 className='text-white'>New Women's Accessories</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Hats & Caps, Sunglasses, Bags & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_1.webp" className="d-block w-100 img-fluid" alt="shoes" />
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
    </div>
  )
}

export default Slider
