import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/sign-up/SignUp"
import SignIn from "./pages/SignIn"
import Error from "./pages/Error"
import AuthRouter from "./pages/Authenticated/AuthRouter"

export default function App() {
    return(
        <div >
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp/>} />
                <Route path="/account/*" element={<AuthRouter/>} />
                <Route exact path="*" element={<Error />}/>
            </Routes>
            
        </div>
    )
}