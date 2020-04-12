import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MemberProfile({ match }) {
  const { params: { profileId } } = match;

  const [state, setState] = useState({
    loading: true,
    bio: ""
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
          setState({ loading: false, bio: res.data[0].data })
        } else {
          setState({ loading: false, bio: { msg: "This Profile Does Not Exist" } })
        }
      })
      .catch(error => console.log(error))
    console.log(state)
  }, [])

  return state.loading ? null : (
    state.bio.msg ?
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>{state.bio.msg}</h1>
      </div>
      :
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>YOLO</h1>
        <div>
          <img src={state.bio.avatarURL} />
        </div>
        <div>
          <button onClick={() => handleDisplay("info")}>
            INFO
          </button>
          <div style={{ display: display.info }}>
            <p>{state.bio.info}</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleDisplay("jobTitle")}>
            현제직위명
          </button>
          <div style={{ display: display.jobTitle }}>
            <p>{state.bio.jobTitle}</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleDisplay("specialField")}>
            전문상담/코칭 분야
          </button>
          <div style={{ display: display.specialField }}>
            <p>{state.bio.specialField}</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleDisplay("certificate")}>
            전문 자격증
          </button>
          <div style={{ display: display.certificate }}>
            <p>{state.bio.certificate}</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleDisplay("experience")}>
            상담/코칭 경력
          </button>
          <div style={{ display: display.experience }}>
            <p>{state.bio.experience}</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleDisplay("degree")}>
            EDUCATIONAL DEGREE
          </button>
          <div style={{ display: display.degree }}>
            <p>{state.bio.degree}</p>
          </div>
        </div>
        <div>
          <button onClick={() => window.open(state.bio.blog)}>
            BLOG
          </button>
        </div>
      </div>
  )
}
