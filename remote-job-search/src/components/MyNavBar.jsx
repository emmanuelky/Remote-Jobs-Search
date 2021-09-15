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

                    <Nav className="me-auto">

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => handleOnInputChange(e)}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar