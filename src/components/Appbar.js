import React, { useState, useEffect } from 'react'
import '../styling/Appbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from 'axios'

export default function Appbar(props) {
  const [loginStatus, setLoginStatus] = useState(false)

  const logout = () => {
    axios.post('/auth/logout')
      .then(res => {
        if (res.data === "out")
          setLoginStatus(false)
        // props.history.push('/')
      })
  }

  const login = () => {
    axios.post('/auth/login')
      .then(res => {
        if (res.data === "in")
          setLoginStatus(true)
        // props.history.push('/login')
      })
  }

  useEffect(() => {
    axios.get('/auth')
      .then(res => {
        res.data === "in" ? setLoginStatus(true) : setLoginStatus(false)
      })
  }, [])

  const dashBoard = () => {
    if (loginStatus) {
      return (
        <NavDropdown title="Counsellors" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
        </NavDropdown>
      )
    }
    return (
      <NavDropdown title="Counsellors" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => login()}>Login</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
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
