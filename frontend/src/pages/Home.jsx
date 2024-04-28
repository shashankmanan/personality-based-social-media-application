import { useEffect } from "react"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useState } from "react"
export default function Home() {
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [profileUpdated , setProfileUpdated] = useState(false)
  useEffect(()=>{
    setUsername(localStorage.getItem("username"))
    
  },[])
  return (
    <div>
      <h1>Hello!! {username}</h1>
      
    </div>
  )
}
