import { useState } from "react"

const Ninecomponent = () => {
  let [number,setnumber]=useState(0)
  let price=30;
  return (
    <div>
        <h1>Welcome to tha nine component</h1>
        <h4>The number is:{number}</h4>
        <button onClick={()=>{
          setnumber(number +1)

        }}>+</button>

        <button onClick={()=>{
          setnumber(number -1)


        }}>-</button>
        <h4>  The total price is:{price*number}</h4>
    </div>
  )
}

export default Ninecomponent

