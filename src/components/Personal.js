import React from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import InfoContainer from './InfoContainer'

export default function Personal() {
  const headerField = {
    title: "개인상담"
  }

  const bannerImage = [
    'https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/05/cropped-qtq80-ZZzq19.jpeg'
  ];

  const messageField = {
    title: "개인상담",
    message: [
      "상담은 여러분의 심리적 고통을 상담사가 함께 나누면서 성장과 성숙을 돕는 과정입니다.",
      "상담의 과정에서 상담자는 여러분의 마음을 이해하고 고통을 수용하며, 판단하지 않고 존중하는 자세로 만납니다. 여러분이 지닌 심리적 어려움과 사고방식, 감정의 문제를 함께 다룸으로서 성장의 발판이 될 수 있도록 돕겠습니다."
    ],
    image: {
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/05/qtq80-C2totS.jpeg"
    },
    // infoTitle: "개인 상담의 특징",
    // info: [
    //   "상담자와 일대일로 만나 자신의 문제에 대해 깊이 있게 이야기 합니다.",
    //   "상담자는 여러분의 고통에 공감하고 도우려고 노력합니다.",
    //   "상담의 내용과 사적인 정보는 철저하게 비밀유지가 됩니다."
    // ]
    info: [
      {
        infoTitle: "개인 상담의 특징",
        info: [
          "상담자와 일대일로 만나 자신의 문제에 대해 깊이 있게 이야기 합니다.",
          "상담자는 여러분의 고통에 공감하고 도우려고 노력합니다.",
          "상담의 내용과 사적인 정보는 철저하게 비밀유지가 됩니다."
        ]
      },
      {
        infoTitle: "대안에 대한 안내",
        info: [
          "세상의 어떤 것도 완벽하지 않기에, 상담도 마찬가지일 수 있으나 최선을 약속드립니다.",
          "만약 개인 상담이 아닌 다른 방법이 유용하다고 합의될 경우, 적절한 방법에 대해 조언해드립니다.",
          "정신과적인 약물치료가 필요한 경우, 보건진료소 및 기타 병의원과 연결하여 병행할 수 있도록 안내해드립니다."
        ]
      }
    ]
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
