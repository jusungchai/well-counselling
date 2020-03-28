import React from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import InfoContainer from './InfoContainer'

export default function Group() {
  const headerField = {
    title: "집단상담"
  }

  const bannerImage = [
    'https://www.christiancentury.org/sites/cc-d7.dd/files/people-sitting-in-circle.jpg'
  ];

  const messageField = {
    title: "집단상담이란?",
    message: [
      "상담은 여러분의 심리적 고통을 상담사가 함께 나누면서 성장과 성숙을 돕는 과정입니다.",
      "집단상담은 비슷한 심리적 어려움을 지닌 사람들로 구성된 집단에서 서로 지지하는 분위기 속에 함께 어려움을 극복하는 상담입니다."
    ],
    image: {
      url: "https://www.christiancentury.org/sites/cc-d7.dd/files/people-sitting-in-circle.jpg"
    }
  }
  
  return (
    <div>
      <Header data={headerField} />
      <ImageCarousel data={bannerImage} />
      <InfoContainer data={messageField} />
      {/* <div id="checklist-container">
        <h1 id="checklist-header">Self Checklist</h1>
        <div id="main-check-list-container">
          <div>
            <ChecklistContainer data={checklistData1} />
            <ChecklistContainer data={checklistData2} />
          </div>
          <div>
            <ChecklistContainer data={checklistData3} />
            <ChecklistContainer data={checklistData4} />
          </div>
        </div>
      </div> */}
    </div>
  )
}
