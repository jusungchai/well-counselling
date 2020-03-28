import React from 'react'
import '../styling/InfoContainer.css'

export default function InfoContainer(props) {
  const createParagraph = () => {
    return props.data.message.map((message, id) =>
      <p key={id}>{message}</p>
    )
  }
  return (
    <div className="info-container">
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
