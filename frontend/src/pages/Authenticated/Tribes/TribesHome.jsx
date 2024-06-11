
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TribesHome() {
    const [tribe,setTribe] = useState("none")
    useEffect(
    () => {
        const val = localStorage.getItem("tribe") 
        console.log(val)
        if(val)
            setTribe(val)
    }
  )
    return (
    <div>
        TribesHome
        { 
            tribe === "none" ? 
            <div>
                <h1>Take the test! find yout tribe!</h1>
                <Link to="/account/test">
                <button>Click here</button>
                </Link>
            </div> : 
            <h1>Your Tribe is : {tribe}</h1>
        }
        
    </div>
  )
}
