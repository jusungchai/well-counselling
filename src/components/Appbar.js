import React from 'react'
import '../styling/Appbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Appbar() {  
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}
