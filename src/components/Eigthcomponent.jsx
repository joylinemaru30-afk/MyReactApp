import { useState } from "react"

const Eigthcomponent = () => {
    const[price,setprice]=useState(500);
    const[quantity,setquantity]=useState(4);
  return (
    <div>
        <h3>Welcome to my Eigth component</h3>
        <h2>the  price is:{price}</h2>
        <button
        onClick={()=>{
            setprice(900)
        }}
        >click to change price</button>
        <h2>the quantity is:{quantity}</h2>
        <button
        onClick={()=>{
            setquantity(8)
        }}
        >click to change quantity</button>

    </div>
  )
}

export default Eigthcomponent