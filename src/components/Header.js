import React from 'react'
import '../styling/Header.css'

export default function Header(props) {
  return (
    <div className="main">
      <h1 id="title">{props.data.title}</h1>
      <br/>
      <p id="sub-title">{props.data.subTitle}</p>
    </div>
  )
}
