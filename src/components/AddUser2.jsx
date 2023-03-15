import React, { useState, useEffect } from 'react';
import {Navbar, Container, Nav, Form, Row, Col, Button} from "react-bootstrap";
import {NewUser} from "./NewUser";
import {supabase} from "../services/supabase.js";

function AddUser2() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [users, setUsers] = useState([]);

    console.log(name);
    console.log(surname);

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        try {
            const {data, error} = await supabase
                .from("newusers")
                .insert({
                    name: name,
                    surname: surname
                })
                .single()

            if (error) {
                console.error(error);
            } else {
                window.location.reload();
                if (data !== null){
                    getUsers(data)
                }
            }
        }
        catch (error){
            alert(error.message);
        }
    }

    async function createUser() {
        try {
            const {data, error} = await supabase
                .from("newusers")
                .select("*")
                .limit(7)
            if (error) {
                console.error(error);
            } else {
                window.location.reload();
                if (data !== null){
                    getUsers(data)
                }
            }
        }
        catch (error){
            alert(error.message);
        }
    }

console.log(users);

    return (
        <>
            <Navbar>

            </Navbar>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h3>Nowy Użytkownik</h3>
                        <Form.Label>Imię</Form.Label>
                        <Form.Control type="text" id="name" onChange={(e) => setName(e.target.value)}>
                        </Form.Control>

                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" id="name" onChange={(e) => setSurname(e.target.value)}>
                        </Form.Control>
                        <br></br>
                        <Button onClick={() => createUser()}>Dodaj</Button>

                    </Col>
                </Row>
                <hr></hr>
                <h3>Członek grupy</h3>
                <Row xs={1} lg={3} className="g-4">
                    {users.map((user) => (
                        <Col>
                            <NewUser user={user}></NewUser>
                        </Col>
                        ))}

                </Row>
            </Container>

        </>

    )
}


export { AddUser2 }