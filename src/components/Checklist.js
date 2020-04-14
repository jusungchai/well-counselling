import React, { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import ChecklistContainer from './ChecklistContainer'
import '../styling/Checklist.css'
import axios from 'axios'

export default function Checklist() {
  const [checklists, setChecklists] = useState(null);

  useEffect(() => {
    axios.get('/checklists', { withCredentials: true })
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

  return (
    <div>
      <Header data={headerField} />
      <ImageCarousel data={bannerImage} />
      <div className="main checklist container">
        <h1 id="checklist-header">Self Checklist</h1>
        <div id="main-check-list-container">
          {createChecklists()}
        </div>
      </div>
    </div>
  )
}
