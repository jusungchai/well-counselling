import React from 'react'
import '../styling/ChecklistContainer.css'

export default function ChecklistContainer(props) {
  const handleClick = () => {
    window.open(props.data.link)
  }
  return (
    <div className="main-container" onClick={() => handleClick()}>
      <img className="emoticon" alt="emoticon" src={props.data.emoticon} />
      <div className="msgcontainer">
        <h1 className="msgKr">{props.data.msgKr}</h1>
        <h1 className="msgEn">{props.data.msgEn}</h1>
      </div>
    </div>
  )
}
