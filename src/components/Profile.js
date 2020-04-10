import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import '../styling/Profile.css'

export default function Profile() {
  const [bio, setBio] = useState({
    avatar: "",
    info: "",
    jobTitle: "",
    specialField: "",
    certificate: "",
    experience: "",
    degree: "",
    blog: "",
    avatarData: null
  })

  const [show, setShow] = useState({
    info: "none",
    jobTitle: "none",
    specialField: "none",
    certificate: "none",
    experience: "none",
    degree: "none",
    avatar: "none",
    blog: "none"
  })

  useEffect(() => {
    axios.get('/profile')
      .then(res => {
        if (res.data.data) {
          console.log(res.data.data)
          const { info, jobTitle, specialField, certificate, experience, degree, blog } = res.data.data
          setBio({
            info,
            jobTitle,
            specialField,
            certificate,
            experience,
            degree,
            blog
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
      case "avatar":
        return show.avatar === "none" ? setShow({ ...show, avatar: "block" }) : setShow({ ...show, avatar: "none" })
      case "blog":
        return show.blog === "none" ? setShow({ ...show, blog: "block" }) : setShow({ ...show, blog: "none" })
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
      case "blog":
        return setBio({ ...bio, blog: e.target.value })
      case "avatar":
        const avatarData = e.target.files[0];
        if ((avatarData.type === "image/jpeg" || avatarData.type === "image/png") && (avatarData.size <= 2621440)) {
          const formData = new FormData()          
          formData.append('avatar', avatarData)          
          setBio({ ...bio, avatar: e.target.value, avatarData: formData })
          alert("ok")
        } else {
          setBio({ ...bio, avatar: "", avatarData: null })
          alert("Image must be JPG/PNG and less than 2MB")
        }
        console.log(e.target.value)
        break;
      default:
        console.log("default")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(bio.avatarData)
    axios.post('/profile', bio)
      .then(res => alert(res.data))
  }

  const placeHolder = {
    info: "Name: Dr. John Doe\nResidence: Canada\nPhone: +1-416-123-1234\nEmail: john.doe@gmail.com\nCommunication: English/Korean\netc...",
    jobTitle: "Title: CEO\nCompany Info\netc...",
    specialField: "일반상담\n결혼과 가족 상담\netc...",
    certificate: "Pastoral Counsellor (Bachelors)\nCertified Clinical Counsellor (Doctors)\netc...",
    experience: "Marriage Counselling for 50+ clients - 2019\netc...",
    degree: "학사/Bachelor of Art - Seoul University (2019)\n기독교상담학학사/Bachelor of Christian Counselling - Seoul University (Current)\netc...",
    blog: "https://naver.com"
  }

  return (
    <div id="profile-container">
      <div className="main profile container">
        <form name="profileForm" className="profile form" onSubmit={(e) => handleSubmit(e)} >
          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("avatar")}>PROFILE IMAGE</Button>
            <div className="profileEditor" style={{ display: show.avatar }}>
              <label style={{ color: "red", fontSize: "small" }}>(ONLY ADD TO CHANGE CURRENT FILE)</label>
              <input className="form-control-file" id="exampleFormControlFile1" value={bio.avatar || ""} type='file' accept='image/jpeg, image/png' onChange={(e) => handleChange(e, "avatar")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("info")}>INFO</Button>
            <div className="profileEditor" style={{ display: show.info }}>
              <textarea name="info" value={bio.info} placeholder={placeHolder.info} as="textarea" rows="8" onChange={(e) => handleChange(e, "info")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("jobTitle")}>현제직위명</Button>
            <div className="profileEditor" style={{ display: show.jobTitle }}>
              <textarea name="jobTitle" value={bio.jobTitle} placeholder={placeHolder.jobTitle} as="textarea" rows="8" onChange={(e) => handleChange(e, "jobTitle")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("specialField")}>전문상담/코칭분야</Button>
            <div className="profileEditor" style={{ display: show.specialField }}>
              <textarea name="specialField" value={bio.specialField} placeholder={placeHolder.specialField} as="textarea" rows="8" onChange={(e) => handleChange(e, "specialField")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("certificate")}>전문 자격증</Button>
            <div className="profileEditor" style={{ display: show.certificate }}>
              <textarea name="certificate" value={bio.certificate} placeholder={placeHolder.certificate} as="textarea" rows="8" onChange={(e) => handleChange(e, "certificate")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("experience")}>상담/코칭 경력</Button>
            <div className="profileEditor" style={{ display: show.experience }}>
              <textarea name="experience" value={bio.experience} placeholder={placeHolder.experience} as="textarea" rows="8" onChange={(e) => handleChange(e, "experience")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("degree")}>EDUCATIONAL DEGREE</Button>
            <div className="profileEditor" style={{ display: show.degree }}>
              <textarea name="degree" value={bio.degree} placeholder={placeHolder.degree} as="textarea" rows="8" onChange={(e) => handleChange(e, "degree")} />
            </div>
          </div>

          <div className="profileContainer">
            <Button className="btn btn-info" style={{ width: "100%" }} onClick={() => handleShow("blog")}>BLOG</Button>
            <div className="profileEditor" style={{ display: show.blog }}>
              <input name="blog" value={bio.blog} placeholder={placeHolder.blog} type="text" rows="8" onChange={(e) => handleChange(e, "blog")} />
            </div>
          </div>

          <Button style={{ width: "100%", marginTop: "2em" }} type="submit">PUBLISH</Button>
        </form>
      </div>
    </div>
  )
}
