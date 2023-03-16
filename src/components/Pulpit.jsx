import { AddUser } from "./AddUser.jsx";
import { AddUserTwo} from "./AddUserTwo.jsx";


const Pulpit = () => {


    return (

        <div className="main-container">
            <div className="container-water">
                <div className="container-box">
            <div className="groups-container">
                <h2>Grupa&nbsp;1</h2>
                <AddUser></AddUser>
            </div>

            <div className="groups-container">
                <h2>Grupa&nbsp;3</h2>
                <AddUserTwo></AddUserTwo>
            </div>
                </div>
                <div className="container-box">
            <div className="groups-container">
                <h2>Grupa&nbsp;2</h2>
                <AddUser></AddUser>
            </div>

            <div className="groups-container">
                <h2>Grupa&nbsp;4</h2>
                <AddUser></AddUser>
            </div>
            </div>
            </div>
        </div>

    )
}

export { Pulpit };