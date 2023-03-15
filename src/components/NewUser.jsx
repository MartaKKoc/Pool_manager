import {Card, Button, Form} from 'react-bootstrap';
import React, { useState } from "react";

function NewUser(props) {
    const user = props.user;

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    console.log(name);
    console.log(surname);

    return (

        <Card style={{width: "18rem"}}>
            <Card.Body>
                { editing === false ?
                    <>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>{user.surname}</Card.Text>
                        <Button variant="danger">Usuń</Button>
                        <Button variant="secondary" onClick={() => setEditing(true)}>Edytuj</Button>
                    </>
                    :
                    <>
                        <h4>Edytuj</h4>
                        <Button size="sm" onClick={() => setEditing(false)}>Wróć</Button>
                        <br></br>

                        <Form.Label>Imię</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            defaultValue={user.name}
                            onChange={(e) => setName(e.target.value)}>
                        </Form.Control>

                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            defaultValue={user.surname}
                            onChange={(e) => setSurname(e.target.value)}>
                        </Form.Control>
                        <br></br>
                        <Button>Dodaj</Button>

                    </>

                }
            </Card.Body>

        </Card>
    )
}export {NewUser};