import React from 'react'
import { Slide } from 'react-slideshow-image';
import '../styling/ImageCarousel.css'

export default function ImageCarousel(props) {
  const slideImages = props.data.length > 1 ? props.data : [...props.data, ...props.data];

  const createChildElm = () => {
    return slideImages.map((url, i) =>
      <div key={i} className="each-slide">
        <div style={{ 'backgroundImage': `url(${url})` }}>
        </div>
      </div>
    )
  }

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    autoplay: props.data.length > 1 ? true : false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  return (
    <div>
      <div className="slide-container">
        <Slide {...properties}>
          {createChildElm()}
        </Slide>
      </div>
    </div>
  )
}
