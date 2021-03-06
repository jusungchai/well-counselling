import React, { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import Member from './Member'
import '../styling/Members.css'
import axios from 'axios'

export default function Members(props) {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    axios.get("/users/profiles", { withCredentials: true })
      .then(res => {
        console.log(res.data)
        setMembers(res.data);
      })
  }, [])

  const headerField = {
    title: "상담센터 구성원"
  }

  const slideImages = [
    'https://www.freevector.com/uploads/vector/preview/30036/Group-of-People.jpg'
  ];

  const createMembers = () => {
    if (members)
      return members.map((member, i) => <Member key={i} data={member} history={props} />)
  }

  return (
    <div id="members">
      <Header data={headerField} />
      <ImageCarousel data={slideImages} />
      <div className="main home container">
        {createMembers()}
      </div>
    </div>
  )
}
