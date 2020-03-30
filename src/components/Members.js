import React from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import Member from './Member'
import '../styling/Members.css'

export default function Members() {
  const headerField = {
    title: "상담센터 구성원"
  }

  const slideImages = [
    'https://www.freevector.com/uploads/vector/preview/30036/Group-of-People.jpg'
  ];

  const members = [
    {
      firstName: "Wayne1",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne2",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne3",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne4",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne5",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne6",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    },
    {
      firstName: "Wayne7",
      lastName: "Chai",
      title: "DOCTORAL",
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/08/WanSoo-Chai.jpeg"
    }
  ]

  const createMembers = () => {
    return members.map((member, i) => <Member key={i} data={member} />)
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
