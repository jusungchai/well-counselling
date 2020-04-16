import React from 'react'
import '../styling/MessageContainer.css'

export default function MessageContainer(props) {
  
  return (
    <div className="main home container">
      <div className="home title container">
        <h1 className="home title">{props.data.title}</h1>
      </div>
      <div className="home inner container">
        <div className="home message">
          <p>{props.data.message}</p>
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
