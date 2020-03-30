import React from 'react'
import '../styling/Member.css'

export default function Member(props) {
  return (
    <div className="member-container">
      <img className="member-avatar" alt="member" src={props.data.url} />
      <div className="member-avatar-info">
        <h3>{props.data.firstName} {props.data.lastName}</h3>
        <p>{props.data.title}</p>
      </div>
    </div>
  )
}
