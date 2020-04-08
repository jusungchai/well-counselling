import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styling/Profile.css'

export default function Profile() {
  const [bio, setBio] = useState({
    info: "",
    jobTitle: "",
    specialField: "",
    certificate: "",
    experience: "",
    degree: ""
  })

  const [show, setShow] = useState({
    info: "none",
    jobTitle: "none",
    specialField: "none",
    certificate: "none",
    experience: "none",
    degree: "none"
  })

  useEffect(() => {
    axios.get('/profile')
      .then(res => {
        if (res.data.data) {
          console.log(res.data.data)
          const { info, jobTitle, specialField, certificate, experience, degree } = res.data.data
          setBio({
            info,
            jobTitle,
            specialField,
            certificate,
            experience,
            degree
          })
        }
      })
  }, [])

  const handleShow = (type) => {
    switch (type) {
      case "info":
        return show.info === "none" ? setShow({ ...show, info: "block" }) : setShow({ ...show, info: "none" })
      case "jobTitle":
        return show.jobTitle === "none" ? setShow({ ...show, jobTitle: "block" }) : setShow({ ...show, jobTitle: "none" })
      case "specialField":
        return show.specialField === "none" ? setShow({ ...show, specialField: "block" }) : setShow({ ...show, specialField: "none" })
      case "certificate":
        return show.certificate === "none" ? setShow({ ...show, certificate: "block" }) : setShow({ ...show, certificate: "none" })
      case "experience":
        return show.experience === "none" ? setShow({ ...show, experience: "block" }) : setShow({ ...show, experience: "none" })
      case "degree":
        return show.degree === "none" ? setShow({ ...show, degree: "block" }) : setShow({ ...show, degree: "none" })
      default:
        console.log("default")
    }
  }
  const handleChange = (e, type) => {
    switch (type) {
      case "info":
        return setBio({ ...bio, info: e.target.value })
      case "jobTitle":
        return setBio({ ...bio, jobTitle: e.target.value })
      case "specialField":
        return setBio({ ...bio, specialField: e.target.value })
      case "certificate":
        return setBio({ ...bio, certificate: e.target.value })
      case "experience":
        return setBio({ ...bio, experience: e.target.value })
      case "degree":
        return setBio({ ...bio, degree: e.target.value })
      default:
        console.log("default")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/profile', bio)
    .then(res => alert(res.data))
  }

  return (
    <div id="profile-container">
      <div className="main profile container">
        <Form name="profileForm" className="profile form" onSubmit={(e) => handleSubmit(e)} >
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("info")}>INFO</Form.Label>
            <Form.Control name="info" value={bio.info} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.info }} onChange={(e) => handleChange(e, "info")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("jobTitle")}>현제직위명</Form.Label>
            <Form.Control name="jobTitle" value={bio.jobTitle} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.jobTitle }} onChange={(e) => handleChange(e, "jobTitle")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("specialField")}>전문상담/코칭분야</Form.Label>
            <Form.Control name="specialField" value={bio.specialField} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.specialField }} onChange={(e) => handleChange(e, "specialField")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("certificate")}>전문자격증</Form.Label>
            <Form.Control name="certificate" value={bio.certificate} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.certificate }} onChange={(e) => handleChange(e, "certificate")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("experience")}>상담/코칭 경력</Form.Label>
            <Form.Control name="experience" value={bio.experience} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.experience }} onChange={(e) => handleChange(e, "experience")} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label onClick={() => handleShow("degree")}>EDUCATIONAL BACKGROUND DEGREE</Form.Label>
            <Form.Control name="degree" value={bio.degree} placeholder="asdf&#10;qwe" as="textarea" rows="8" style={{ display: show.degree }} onChange={(e) => handleChange(e, "degree")} />
          </Form.Group>
          <Button type="submit">PUBLISH</Button>
        </Form>
      </div>
    </div>
  )
}
