import React from 'react'
import '../styling/Member.css'

export default function Member(props) {
  return (
    <div className="member-container" onClick={() => props.history.history.push(`/member/${props.data.id}`)} >
      <img className="member-avatar" alt="member" src="https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg" />
      <div className="member-avatar-info">
        <h3>{props.data.firstname} {props.data.lastname}</h3>
      </div>
    </div>
  )
}
