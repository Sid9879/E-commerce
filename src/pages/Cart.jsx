import React from 'react'

const Cart = (props) => {
  console.log(props.cart)

  let sum = 0;
  for(let i =0; i<props.cart.length;i++){
    sum = sum+props.cart[i].price

  }

  const Handledelete = (ans,i)=>{
    console.log(ans,i)

    let copyArr = [...props.cart]
    copyArr.splice(i,1)
    // console.log(props.cart)
    // console.log(copyArr)
    props.setcartArr(copyArr)


  }
  const handleincrement =(obj,i)=>{
    console.log(obj)
    console.log(i)

    let updatedobj = {
      ...obj,
      quantity:obj.quantity+1,
      price:obj.price+obj.price/obj.quantity
    }
    console.log(updatedobj)

    let copyArr = [...props.cart]
    copyArr[i] = updatedobj
    props.setcartArr(copyArr)
  }

  const handledecrement =(obj,i)=>{
    console.log(obj)
    console.log(i)

    let updatedobj = {
      ...obj,
      quantity:obj.quantity-1,
      price:obj.price-obj.price/obj.quantity
    }
if(updatedobj.quantity<1){
  Handledelete(obj,i)
  return
}
    let copyArr = [...props.cart]
    copyArr[i] = updatedobj
    props.setcartArr(copyArr)
  }
  
  return (
    <div>
     { props.cart.length>0 && <table className="table align-middle">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Qunatity</th>
    </tr>
  </thead>
  <tbody>
   {props.cart.map((ele,index)=>{
    return  <tr>
    <th scope="row">{index+1}</th>
    <td><img style={{width:"100px",height:"100px"}} src={ele.thumbnail} alt="" /></td>
    <td>{ele.title}</td>
    <td>${ele.price}</td>
    <td><button onClick={()=>handledecrement(ele,index)} className='btn btn-info'>-</button>{ele.quantity} <button onClick={()=>handleincrement(ele,index)} className='btn btn-danger'>+</button></td>
    <td><button onClick={()=>Handledelete(ele,index)} className='btn btn-danger'>Delete</button></td>
  </tr>
   })}
  </tbody>
  <tr>
  <td style={{height:"50px"}} colSpan={6} className='bg-danger text-center fs-5'>Total = {sum}</td>
  </tr>
</table>}
 {!props.cart.length&&<h1 className='heading bg-danger text-center mt-5 fs-10 text-info'>Please add some items in cart</h1>}
    </div>
  )
}

export default Cart