import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const MyNavBar = ({ jobs }) => {

    const favouriteJob = useSelector(state => state.user.favourites.length)

    console.log(favouriteJob)
    return (
        <div className="sticky-top">
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="/">REMOTEJOBS</Navbar.Brand>
                    </Link>

                    <Link to='/favourite'>
                        <Nav className="me-auto">
                            <h6>
                                My Jobs <i className={favouriteJob > 0 ? "fas fa-heart text-danger mx-1" : "far fa-heart text-warning mx-1"}></i>
                                <span> {favouriteJob}</span>
                            </h6>
                        </Nav>
                    </Link>

                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar