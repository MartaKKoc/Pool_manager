import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from "./vievs/Dashboard.jsx";
import {SignIn} from "./vievs/SignIn.jsx";
import {SignUp} from "./vievs/SignUp.jsx";
import {Header} from "./components/Header.jsx";
import {Pulpit} from "./vievs/Pulpit.jsx";
import {Checklist} from "./vievs/Checklist.jsx";
import {Info} from "./vievs/Info.jsx";


function App() {

  return (
    <Router>
        <Header></Header>
        <Routes>

            <Route path="/" element={<Dashboard />}>
                <Route path="../pulpit" element={<Pulpit />}>
                    <Route path="../info" element={<Info />}></Route>
                    <Route path="../checklist" element={<Checklist />}></Route>
                </Route>
            </Route>

            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

        </Routes>

    </Router>
  )
}

export default App
