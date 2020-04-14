import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styling/Register.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Register(props) {
  const isLogged = useSelector(state => state.isLogged)

  const [field, updateField] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    registrationKey: "",
    disabled: false
  })

  const confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (field.password !== field.confirmPassword) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  useEffect(() => {
    if (confirm_password)
      validatePassword()
  }, [field.password, field.confirmPassword])

  const checkPassword = () => {
    return field.password === field.confirmPassword
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkPassword()) {
      updateField({ ...field, disabled: true })
      axios.post('/auth/register', field, { withCredentials: true })
        .then(res => {
          if (res.data === "user created") {
            alert("Success, Please Login")
            props.history.push('/login')
          } else if (res.data === "email already registered") {
            alert("Provided email is already registered")
            updateField({ ...field, disabled: false })
          } else if (res.data === "Invalid Registration Key") {
            alert("Invalid Registration Key")
            updateField({ ...field, disabled: false })
          }
        })
    }
  }

  const handleChange = (e, type) => {
    switch (type) {
      case "firstName":
        return updateField({ ...field, firstName: e.target.value })
      case "lastName":
        return updateField({ ...field, lastName: e.target.value })
      case "phone":
        return updateField({ ...field, phone: e.target.value })
      case "email":
        return updateField({ ...field, email: e.target.value })
      case "password":
        return updateField({ ...field, password: e.target.value })
      case "confirmPassword":
        return updateField({ ...field, confirmPassword: e.target.value })
      case "registrationKey":
        return updateField({ ...field, registrationKey: e.target.value })
      default:
        console.log("default")
    }
  }

  return isLogged ? <Redirect to='/' /> : (
    <div className="main register container">
      <div id="register-container">
        <Form className="register form" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <div id="name-container">
              <div id="first-name">
                <Form.Label className="registerLabel">First Name</Form.Label>
                <Form.Control placeholder="John" required onChange={(e) => handleChange(e, "firstName")} />
              </div>
              <div id="last-name">
                <Form.Label className="registerLabel">Last Name</Form.Label>
                <Form.Control placeholder="Doe" required onChange={(e) => handleChange(e, "lastName")} />
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="registerLabel">Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" required onChange={(e) => handleChange(e, "email")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="registerLabel">Phone Number</Form.Label>
            <Form.Control required onChange={(e) => handleChange(e, "phone")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="registerLabel">Password</Form.Label>
            <Form.Control type="password" minLength="8" required onChange={(e) => handleChange(e, "password")} id="password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="registerLabel">Confirm Password</Form.Label>
            <Form.Control type="password" required onChange={(e) => handleChange(e, "confirmPassword")} id="confirm_password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="registerLabel">Registration Key</Form.Label>
            <Form.Control type="password" required onChange={(e) => handleChange(e, "registrationKey")} />
          </Form.Group>
          <Button id="register-button" disabled={field.disabled} type="submit">Register</Button>
        </Form>
      </div>
    </div>
  )
}
