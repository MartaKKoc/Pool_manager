import React, { useState, useEffect } from 'react';
import { supabase } from "../services/supabase.js";

function UserListTwo() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const { data, error } = await supabase
                .from('users2')
                .select('*');
            if (error) console.log('error', error);
            else setUsers(data);
        }
        fetchUsers();
    }, []);

    async function handleDelete(id) {
        const { error } = await supabase.from('users2')
            .delete()
            .eq('id', id);
        if (error) console.log('error', error);
        else setUsers(users.filter(user => user.id !== id));
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <span>{user.name} {user.surname}, {user.age}, tel. {user.phone}</span>
                    <button onClick={() => handleDelete(user.id)}>Usuń</button>
                </li>
            ))}
        </ul>
    );
}

export { UserListTwo };