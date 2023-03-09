import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Dashboard} from "./vievs/Dashboard.jsx";
import {SignIn} from "./vievs/SignIn.jsx";
import {SignUp} from "./vievs/SignUp.jsx";
import {Header} from "./components/Header.jsx";
import {Pulpit} from "./components/Pulpit.jsx";
// import {Info} from "./components/Info.jsx";


function App() {
    return (
    <Router>
        <Header></Header>

        <Routes>
            <Route path="/" element={<Pulpit />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

        </Routes>

    </Router>
  )
}

export {App }



    // return (
//     <Router>
//         <Header></Header>
//         <Routes>
//             <Route path="/" element={<Dashboard />}>
//                 <Route path="/pulpit" element={<Pulpit />} />
//                 <Route path="/info">
//                     <Route path="/info" element={<Info />} />
//                     <Route path="/info/:id" element={<Info />} />
//                 </Route>
//             </Route>
//
//             <Route path="/signin" element={<SignIn />}></Route>
//             <Route path="/signup" element={<SignUp />}></Route>
//
//         </Routes>
//
//     </Router>
//   )
// }