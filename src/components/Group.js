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
    title: "집단상담",
    message: [
      "상담은 여러분의 심리적 고통을 상담사가 함께 나누면서 성장과 성숙을 돕는 과정입니다.",
      "집단상담은 비슷한 심리적 어려움을 지닌 사람들로 구성된 집단에서 서로 지지하는 분위기 속에 함께 어려움을 극복하는 상담입니다."
    ],
    image: {
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/uploads/2018/05/qtq80-DDpWyu.jpeg"
    },
    info: [
      {
        infoTitle: "집단 상담의 특징",
        info: [
          "집단상담은 추구목적에 따라 구조화된 상담과 비구조화된 상담으로 구분됩니다.",
          "비구조화 상담 : 다양한 집단원들과의 상호작용을 통해 자신에 대한 심층적인 이해를 높이고 타인의 관점과 입장을 이해하고 인간 관계에 대한 이해의 폭을 넓히고 관계를 개선하는 것을 강조합니다.",
          "구조화 상담 : 비슷한 문제를 가진 분 10명 내외로 집단을 구성하며, 목적에 따라서 개별 프로그램이 진행됩니다.\n(종류 : 대인관계 향상 프로그램, 부적응적 완벽주의 변화 프로그램, 스트레스 관리 프로그램, 미루는 습관 고치기 프로그램, 진로탐색 프로그램 등)"
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
