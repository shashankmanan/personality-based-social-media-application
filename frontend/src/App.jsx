import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/sign-up/SignUp"
import SignIn from "./pages/SignIn"
import Error from "./pages/Error"

export default function App() {
    return(
        <div >
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp/>} />
                <Route exact path="*" element={<Error />}/>
            </Routes>
            
        </div>
    )
}