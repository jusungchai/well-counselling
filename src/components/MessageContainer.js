import React from 'react'
import '../styling/MessageContainer.css'

export default function MessageContainer(props) {
  const createParagraph = () => {
    return props.data.message.map(message =>
      <p>{message}</p>
    )
  }
  return (
    <div className="message-container">
      <div>
        <h1 className="title">{props.data.title}</h1>
      </div>
      <div className="inner-container">
        <div className="message">
          {createParagraph()}
        </div>
        {
          props.data.image ?
            <div className="image">
              <img alt={props.data.image.name} src={props.data.image.url} />
            </div> : null
        }
      </div>
    </div>
  )
}
