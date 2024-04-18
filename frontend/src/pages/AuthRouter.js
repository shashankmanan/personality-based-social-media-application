import { useEffect } from "react"
import { Routes,Route } from "react-router-dom"
import Profile from "./Profile"
import Home from "./Home"
import { useNavigate } from "react-router-dom"

export default function AuthRouter() {

  const navigate = useNavigate()

  useEffect(() => {
    if(! localStorage.getItem("auth"))
      navigate("/signin")
  } , [])
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path = "/profile" element = {<Profile />}/>
      </Routes>
    </div>
  )
}
