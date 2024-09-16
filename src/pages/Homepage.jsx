import React, { useEffect, useState } from 'react'
import{ Link } from 'react-router-dom'
const Homepage = (props) => {
  const[products,setproducts]=useState([])
  // console.log(products)
  const getAllData = async()=>{
   try{
    let res = await fetch('https://dummyjson.com/products?limit=0&skip=0')
    let data = await res.json()
    console.log(data.products)
    setproducts(data.products)
   }
   catch{
    console.error([]);
   }
  }
  useEffect(()=>{
    getAllData()
  },[])

const handleproducts =(a,b)=>{
 console.log(a)
 console.log(b)
}
const handleproductscarts =(obj,i)=>{
//  console.log(obj)
 props.cart(obj)
 }
 
  
  return (
    <div className='row m-0 p-0 justify-content-center gap-2 bg-dark'>
     {
      products?.map((obj,i)=>{
        return <div key={obj.id} className="card" style={{width: '18rem'}}>
  <img src={obj.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="title" style={{height:"60px"}}>{obj.title}</h5>
    <p className="card-text">${obj.price}</p>
    <Link to ="/viewdetails" state={obj}className="btn btn-primary me-2" onClick={()=>handleproducts(obj,i)}>View Details</Link>
    <button className="btn btn-primary" onClick={()=>handleproductscarts(obj,i)}>Add to Cart</button>
  </div>
</div>

      })
     }

    </div>
  )
}

export default Homepage