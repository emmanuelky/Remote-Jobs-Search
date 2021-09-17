import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MyNavBar = ({ jobs }) => {
    const [search, setSearch] = useState('')

    const handleOnInputChange = (e) => {
        e.preventDefault();
        console.log(e)
        setSearch(e.target.value)
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="/">REMOTEJOBS</Navbar.Brand>
                    </Link>

                    <Link to='/favourite'>
                        <Nav className="me-auto">
                            <h5>
                                My Favourite
                            </h5>
                        </Nav>
                    </Link>

                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar