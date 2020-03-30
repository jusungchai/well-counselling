import React from 'react'
import '../styling/InfoContainer.css'

export default function InfoContainer(props) {
  const createParagraph = () => {
    return props.data.message.map((message, id) =>
      <p key={id}>{message}</p>
    )
  }

  const createInfo = () => {
    return (
      props.data.info.map((elm, i) => {
        return (
          <div key={i}>
            <div>
              <h4 className="program">{elm.infoTitle}</h4>
            </div>
            <ol>
              {elm.info.map((msg, i) => <li key={i}>{msg}</li>)}
            </ol>
          </div>
        )
      })
    )
  }
  return (
    <div className="main program container">
      <div className="program title container">
        <h1 className="info title">{props.data.title}</h1>
      </div>
      <div className="program quote container">
        <div className="program message">
          {createParagraph()}
        </div>
        {
          props.data.image ?
            <div className="image">
              <img alt={props.data.image.name} src={props.data.image.url} />
            </div> : null
        }
      </div>
      <div className="program info container">
        {createInfo()}
      </div>
    </div>
  )
}
