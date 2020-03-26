import React from 'react'
import '../styling/Header.css'

export default function Header(props) {
  return (
    <div className="main">
      <h1 id="title">{props.data.title}</h1>
      {props.data.subTitle ? <p id="sub-title">{props.data.subTitle}</p> : null}
      {/* <br />
      <p id="sub-title">{props.data.subTitle}</p> */}
    </div>
  )
}
