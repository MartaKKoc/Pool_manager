import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from "./vievs/Dashboard.jsx";
import {SignIn} from "./vievs/SignIn.jsx";
import {SignUp} from "./vievs/SignUp.jsx";
import {Header} from "./components/Header.jsx";
import {Pulpit} from "./components/Pulpit.jsx";



function App() {

  return (
    <Router>
        <Header></Header>
        <Routes>

            <Route path="/" element={<Dashboard />}>
                <Route path="/pulpit" element={<Pulpit />}>
                </Route>
            </Route>

            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

        </Routes>

    </Router>
  )
}

export default App
