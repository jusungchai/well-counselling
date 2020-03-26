import React from 'react'
import { Slide } from 'react-slideshow-image';
import '../styling/ImageCarousel.css'

export default function ImageCarousel() {
  const slideImages = [
    'http://wellcounselling.com/wp-content/themes/mesmerize/assets/images/home_page_header.jpg',
    'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/03/qtq80-iBjOm3.jpeg',
    'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/03/qtq50-Q7QAAZ.jpeg'
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  return (
    <div>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
