import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styling/Login.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../actions'
import { Redirect } from 'react-router-dom'

export default function Login(props) {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  const [pw, togglePW] = useState("password")
  const [field, updateField] = useState({
    email: "",
    password: "",
    disabled: false
  })

  const showPW = () => {
    pw === "password" ? togglePW("") : togglePW("password")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateField({ ...field, disabled: true })
    axios.post('/auth/login', field, { withCredentials: true })
      .then(res => {
        if (res.data === "logged in") {
          alert("Logged In")
          dispatch(login())
          props.history.push('/')
        }
        else if (res.data === "wrong pw") {
          alert("Wrong Password")
          updateField({ ...field, disabled: false })
        } else if (res.data === "user not found") {
          alert("Unable to find registered user")
          updateField({ ...field, disabled: false })
        }
      })
      .catch(err => alert(err))
  }

  const handleChange = (e, type) => {
    switch (type) {
      case "email":
        return updateField({ ...field, email: e.target.value })
      case "password":
        return updateField({ ...field, password: e.target.value })
      default:
        console.log("default")
    }
  }

  if (isLogged === null)
    return null
  else if (isLogged)
    return <Redirect to='/' />
  else
    return (
      <div className="main login container">
        <div id="login-container">
          <Form className="login form" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="login-form" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control className="loginField" type="email" placeholder="name@example.com" required onChange={(e) => handleChange(e, "email")} />
            </Form.Group>
            <Form.Group className="login-form" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control className="loginField" type={pw} required onChange={(e) => handleChange(e, "password")} />
              <input id="showPW" type="checkbox" onClick={() => showPW()} /> Show Password
          </Form.Group>
            <Button id="login-button" type="submit" disabled={field.disabled}>Login</Button>
          </Form>
        </div>
      </div>
    )
}
