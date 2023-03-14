import React, { useState } from 'react';
import {supabase} from "../services/supabase.js";

function AddUser() {
    const [users, setUsers] = useState([]);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const addUser = async (event) => {
        event.preventDefault();
        const {data, error} = await supabase
            .from("users")
            .insert({name, surname, age, phone })
        if (error) {
            console.log(error);
        }
        else {
            console.log("Dodano użytkownika do bazy danych");
        }
        setUsers([...users, { name, surname, age, phone }]);
        setName('');
        setSurname('');
        setAge('');
        setPhone('');
        }




    return (
        <div>

                <div>
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
                    <button onClick={addUser}>Zapisz</button>
                </div>
            }
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} {user.surname}, {user.age} {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { AddUser }