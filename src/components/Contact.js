import React, { useState } from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styling/Contact.css'
import axios from 'axios'

export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    body: "",
    disabled: false
  })

  const handleChange = (event, type) => {
    switch (type) {
      case "name":
        return setFormData({ ...formData, name: event.target.value })
      case "email":
        return setFormData({ ...formData, email: event.target.value })
      case "title":
        return setFormData({ ...formData, title: event.target.value })
      case "body":
        return setFormData({ ...formData, body: event.target.value })
      default:
        console.log("default")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, disabled: true })
    axios.post('/contact', formData)
      .then(res => {
        if (res.data === "sent") {
          alert("Email Sent! Someone will get back to you ASAP")
          props.history.push('/')
        } else if (res.data === "failed") {
          alert("Something went wrong, please try again")
          setFormData({ ...formData, disabled: false })
        }
      })
  }

  const headerField = {
    title: "CONTACT"
  }

  const slideImages = [
    'https://carleton.ca/campuscard/wp-content/uploads/Banner-Contact-Us.jpg'
  ];

  return (
    <div id="contact-container">
      <Header data={headerField} />
      <ImageCarousel data={slideImages} />
      <div className="main contact container">
        <Form className="contact form" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" required onChange={(e) => handleChange(e, "name")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => handleChange(e, "email")} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" onChange={(e) => handleChange(e, "title")} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>메시지</Form.Label>
            <Form.Control as="textarea" rows="8" onChange={(e) => handleChange(e, "body")} required />
          </Form.Group>
          <Button type="submit" disabled={formData.disabled}>보내기</Button>
        </Form>
      </div>
    </div>
  )
}
