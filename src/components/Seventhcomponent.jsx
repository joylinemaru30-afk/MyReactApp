import { useState } from "react"

const Seventhcomponent = () => {
    // below we initialize our hooks 
    const[number,setnumber]=useState(10);
    const[weight,setweight]=useState(60);
  return (
    <div>
        <h3>Welcome to my Seventh component</h3>

        <h3>the number is:{number}</h3>
        <button
        onClick={()=>{
            setnumber(50)
        }}
        >click to change the number</button>
        <h3>the weigth is:{weight}</h3>
        <button
        onClick={()=>{
            setweight(75)
        }}
        >click to change weigth</button>
    </div>
  )
}

export default Seventhcomponent
