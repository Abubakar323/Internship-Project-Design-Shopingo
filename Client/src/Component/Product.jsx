import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product() {

  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/data");

    // const {data} = await fetch("http://localhost:3000/api/user")

    console.log(data)
    // console.log(data.results);
    setUser(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (

    <div className="container">
      <br /><br />
      <div className="row">
        {
          user.map((item) => {
            return <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0" key={item.product_id}>
              <img src={item.image} alt="image" className='img-fluid' />
              <br /><br />
              <div className='d-flex justify-content-between'>
                <h6 className='text-dark '>{item.name}</h6>
                <p className='text-dark'>{item.price}</p>

              </div>

            </div>
          })
        }

      </div>
    </div>
  )
}




// import React from 'react'

// function Product() {
//   return (
//     <div>
// lalsalslajs
//     </div>
//   )
// }

// export default Product
