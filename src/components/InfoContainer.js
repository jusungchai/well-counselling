import React from 'react'
import '../styling/InfoContainer.css'

export default function InfoContainer(props) {
  const createParagraph = () => {
    return props.data.message.map((message, id) =>
      <p key={id}>{message}</p>
    )
  }

  const createInfo = () => {
    return props.data.info.map((msg, i) => <li key={i}>{msg}</li>)
  }
  return (
    <div>
      <div>
        <h1 className="title">{props.data.title}</h1>
      </div>
      <div className="quote-container">
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
      <div>
        <div>
          <h3>{props.data.infoTitle}</h3>
        </div>
        <ol>
          {createInfo()}
        </ol>
      </div>
    </div>
  )
}
