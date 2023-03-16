import React, { useState, useEffect } from 'react';
import {supabase} from "../services/supabase.js";
import {UserList} from "./UserList.jsx";


function AddUser() {
    const [showList, setShowList] = useState(false);

    const [users, setUsers] = useState([]);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        addUser()
    }, [])

    const addUser = async () => {
 try {
        const {data, error} = await supabase
            .from("users")
            .insert({name: name,
                surname: surname,
                age: age,
                phone: phone
            })
        if (error) {
            console.log(error);
        }
        else {
            if (data !== null){
                addUser(data)
            }
        }
 }
 catch (error) {
     alert(error.message)
 }
        setUsers([...users, { name, surname, age, phone }]);
        setName('');
        setSurname('');
        setAge('');
        setPhone('');
        }

    return (
        <div className="form-container">
            {showList === false ?
            <>
                <div className="input-container">
                    <label>Imię:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>Nazwisko:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <br />
                    <label>Wiek:</label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <br />
                    <label>Telefon:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                    <button className="save-button" onClick={addUser}>Zapisz</button>

                    <button className="show-button" onClick={() => setShowList(true)}>Pokaż listę</button>
                </div>
            </>
                :
<>
    <button className="show-button" onClick={() => setShowList(false)}>Wróć</button>
            <UserList></UserList>
</>
            }
        </div>
    );

}

export { AddUser }