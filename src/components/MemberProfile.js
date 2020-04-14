import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import Button from 'react-bootstrap/Button'
import '../styling/MemberProfile.css'

export default function MemberProfile({ match }) {
  const { params: { profileId } } = match;

  const slideImages = [
    'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/03/qtq50-Q7QAAZ.jpeg'
  ];

  const [state, setState] = useState({
    loading: true,
    bio: "",
    headerField: ""
  })

  const [display, toggleDisplay] = useState({
    info: "none",
    jobTitle: "none",
    specialField: "none",
    certificate: "none",
    experience: "none",
    degree: "none"
  })

  const handleDisplay = (field) => {
    switch (field) {
      case "info":
        toggleDisplay({ ...display, info: display.info === "none" ? "block" : "none" })
        break;
      case "jobTitle":
        toggleDisplay({ ...display, jobTitle: display.jobTitle === "none" ? "block" : "none" })
        break;
      case "specialField":
        toggleDisplay({ ...display, specialField: display.specialField === "none" ? "block" : "none" })
        break;
      case "certificate":
        toggleDisplay({ ...display, certificate: display.certificate === "none" ? "block" : "none" })
        break;
      case "experience":
        toggleDisplay({ ...display, experience: display.experience === "none" ? "block" : "none" })
        break;
      case "degree":
        toggleDisplay({ ...display, degree: display.degree === "none" ? "block" : "none" })
        break;
      default:
        console.log(field)
    }
  }

  useEffect(() => {
    axios.get(`/users/profile?id=${profileId}`)
      .then(res => {
        console.log(res.data[0])
        if (res.data.length > 0) {
          setState({ loading: false, bio: res.data[0].data, headerField: { title: `${res.data[0].firstname} ${res.data[0].lastname}` } })
        } else {
          setState({ loading: false, bio: { msg: "This Profile Does Not Exist" } })
        }
      })
      .catch(error => console.log(error))
    console.log(state)
  }, [])

  return state.loading ? null : (
    <div id="memberProfile">
      <Header data={state.headerField || { title: "COUNSELLOR" }}  />
      <ImageCarousel data={slideImages} />
      <div className="main member container">
        {
          state.bio.msg ?
            <div className="profile-inner-container">
              <h1>{state.bio.msg}</h1>
            </div>
            :
            <div className="profile-inner-container">
              <div className="profile-image-container">
                <img src={state.bio.avatarURL} />
              </div>
              <div className="profile-buttons-container">
                <div>
                  <Button variant="info" onClick={() => handleDisplay("info")}>
                    INFO
                  </Button>
                  <div style={{ display: display.info }}>
                    <p>{state.bio.info}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => handleDisplay("jobTitle")}>
                    현제직위명
                  </Button>
                  <div style={{ display: display.jobTitle }}>
                    <p>{state.bio.jobTitle}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => handleDisplay("specialField")}>
                    전문상담/코칭 분야
                  </Button>
                  <div style={{ display: display.specialField }}>
                    <p>{state.bio.specialField}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => handleDisplay("certificate")}>
                    전문 자격증
                  </Button>
                  <div style={{ display: display.certificate }}>
                    <p>{state.bio.certificate}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => handleDisplay("experience")}>
                    상담/코칭 경력
                  </Button>
                  <div style={{ display: display.experience }}>
                    <p>{state.bio.experience}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => handleDisplay("degree")}>
                    EDUCATIONAL DEGREE
                  </Button>
                  <div style={{ display: display.degree }}>
                    <p>{state.bio.degree}</p>
                  </div>
                </div>
                <div>
                  <Button variant="info" onClick={() => window.open(state.bio.blog)}>
                    BLOG
                  </Button>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
