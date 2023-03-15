import React, { useState } from 'react';
import { AddUser } from "./AddUser.jsx";


const Pulpit = () => {
    const [users, setUsers] = useState([]);
    const [showList, setShowList] = useState(false);

    const addUser = (name, surname, age, phone) => {
        setUsers([...users, { name, surname, age, phone }]);
    };

    const handleShowList = () => {
        setShowList(true);
    };


    // -----------------

    const [showAddUser, setShowAddUser] = useState(false);

    const handleClick = () => {
        setShowAddUser(true);
    };

    // ---------------------
    return (

        <div className="main-container">
            <div className="container-water">
                <div className="container-box">
            <div className="groups-container">
                <h2>Grupa&nbsp;1</h2>
                <AddUser></AddUser>
            </div>

            <div className="groups-container">
                <h2>Grupa&nbsp;2</h2>
                <button>Informacje</button>
                <button>CheckList</button>
            </div>
                </div>
                <div className="container-box">
            <div className="groups-container">
                <h2>Grupa&nbsp;3</h2>
                <button>Informacje</button>
                <button>CheckList</button>
            </div>

            <div className="groups-container">
                <h2>Grupa&nbsp;4</h2>
                <button>Informacje</button>
                <button>CheckList</button>
            </div>
            </div>
            </div>
        </div>

    )
}

export { Pulpit };