import React from 'react'
import '../styling/Member.css'

export default function Member(props) {
  return (
    <div className="member-container" onClick={() => props.history.history.push(`/member/${props.data.userid}`)} >
      <img className="member-avatar" alt="member" src={props.data.avatarurl} />
      <div className="member-avatar-info">
        <h3>{props.data.firstname} {props.data.lastname}</h3>
      </div>
    </div>
  )
}
