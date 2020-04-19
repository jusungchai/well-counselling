import React, { useState, useEffect } from 'react'
import '../styling/Appbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin, adminLogin, logout } from '../actions'

export default function Appbar(props) {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios.post('/auth/logout', null, { withCredentials: true })
      .then((res) => {
        if (res.data === "logged out") {
          dispatch(logout())
          props.history.push('/')
        }
      })
  }

  const linkToLogin = () => {
    props.history.push('/login')
  }

  const linkToRegister = () => {
    props.history.push('/register')
  }

  useEffect(() => {
    axios.get('/auth', { withCredentials: true })
      .then(res => {
        if (res.data === "admin"){
          dispatch(adminLogin())
        } else if (res.data === "user"){
          dispatch(userLogin())
        } else {
          dispatch(logout())
        }
        // res.data === "in" ? dispatch(adminLogin()) : dispatch(logout())
      })
  }, [isLogged])

  const dashBoard = () => {
    if (isLogged === "user") {
      return (
        <NavDropdown title="Counsellors" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
        </NavDropdown>
      )
    } else if (isLogged === "admin") {
      return (
        <NavDropdown title="Counsellors" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
        </NavDropdown>
      )
    }
    return (
      <NavDropdown title="Counsellors" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => linkToLogin()}>Login</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => linkToRegister()}>Register</NavDropdown.Item>
      </NavDropdown>
    )
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><strong>WELL</strong> COUNSELLING</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">홈</Nav.Link>
          <Nav.Link href="/checklist">CHECKLIST</Nav.Link>
          <NavDropdown title="프로그램" id="basic-nav-dropdown">
            <NavDropdown.Item href="/group">집단상담</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/personal">개인상담</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="상담센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="/members">상담센터 구성원</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/intro">상담센터 소개</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/board">나눔터</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
          <Nav.Link href="/qa">Q&A</Nav.Link>
          {dashBoard()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
