import React, { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import ChecklistContainer from './ChecklistContainer'
import '../styling/Checklist.css'
import axios from 'axios'

export default function Checklist() {
  const [checklists, setChecklists] = useState(null);

  useEffect(() => {
    axios.get('/checklists')
      .then(res => setChecklists(res.data))
  }, [])

  const createChecklists = () => {
    if (checklists)
      return checklists.map((list, i) => <ChecklistContainer key={i} data={list.data} />)
  }

  const headerField = {
    title: "Checklist"
  }

  const bannerImage = [
    'https://www.avepoint.com/blog/wp-content/uploads/2018/10/iStock-486552677-e1539874447791.jpg'
  ];

  // const checklistData1 = {
  //   emoticon: 'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/10/자존심.png',
  //   msgKr: "자존감 하락이에요",
  //   msgEn: "It's a drop in self-esteem",
  //   link: "https://docs.google.com/forms/d/e/1FAIpQLSevBhUT61AmmXx8jEvKE4CiG_1R8S1dXh0f8Kh9S2GNixsd7A/viewform?vc=0&c=0&w=1"
  // }

  // const checklistData2 = {
  //   emoticon: 'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/10/스트레스.png',
  //   msgKr: "스트레스가 많아요",
  //   msgEn: "It's stressful",
  //   link: "https://docs.google.com/forms/d/e/1FAIpQLSe8Kee__jZriy0ky-andpKOerXMI_DxJQyE8S-ZGaHVEWMy_A/viewform?vc=0&c=0&w=1"
  // }

  // const checklistData3 = {
  //   emoticon: 'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/10/우울.png',
  //   msgKr: "우울해요",
  //   msgEn: "I feel depressed",
  //   link: "https://docs.google.com/forms/d/e/1FAIpQLSdp-hdoMwjn64LADwAGGtaCo9y9t8yi6SUkLBQ_MiTA0koWGQ/viewform?vc=0&c=0&w=1"
  // }

  // const checklistData4 = {
  //   emoticon: 'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/10/무서워.png',
  //   msgKr: "불안해요",
  //   msgEn: "I'm nervous",
  //   link: "https://docs.google.com/forms/d/e/1FAIpQLSc2G6mzXRZkQ08zohgG2pvoPCzrZArWMy81MP23IhbU6iIwzg/viewform?vc=0&c=0&w=1"
  // }

  return (
    <div>
      <Header data={headerField} />
      <ImageCarousel data={bannerImage} />
      <div id="main checklist-container">
        <h1 id="checklist-header">Self Checklist</h1>
        <div id="main-check-list-container">
          {createChecklists()}
          {/* <div>
            <ChecklistContainer data={checklistData1} />
            <ChecklistContainer data={checklistData2} />
          </div>
          <div>
            <ChecklistContainer data={checklistData3} />
            <ChecklistContainer data={checklistData4} />
          </div> */}
        </div>
      </div>
    </div>
  )
}
