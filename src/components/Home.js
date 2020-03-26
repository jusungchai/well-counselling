import React from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import MessageContainer from './MessageContainer'

export default function Home() {  
  const headerField = {
    title: "Welcome to Well Counselling",
    subTitle: "Well Counselling 에 오신 것을 환영 합니다"
  }

  const messageField = {
    title: "INTRODUCTION",
    message: [
      "마음을 나눌 곳이 필요한가요? 머릿속이 복잡해 지고 있나요?",
      "누군가에게 털어놓고 싶지만 어디로 가야할지 모르겠다면, 주저하지 말고 Well Counselling을 찾아주세요.",
      "Canada Christian College의 Well Counselling 상담센터는 고민이 있으신 모든 분께 상담 서비스를 제공하기 위해 2018년 4월에 문을 열었습니다.",
      "Well Counselling은 개인상담, 집단상담, 가족상담 등을 통해서 여러분의 자신에 대한 이해를 돕고 내적 성장을 이룰 수 있도록 적극 지원하겠습니다."
    ],
    image: {
      url: "https://secureservercdn.net/198.71.233.204/5xi.ab1.myftpupload.com/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/sections/images/about-img-5.jpg",
      name: "welcome image name"
    }
  }

  const messageField1 = {
    title: "INTRODUCTION",
    message: [
      "마음을 나눌 곳이 필요한가요? 머릿속이 복잡해 지고 있나요?",
      "누군가에게 털어놓고 싶지만 어디로 가야할지 모르겠다면, 주저하지 말고 Well Counselling을 찾아주세요.",
      "Canada Christian College의 Well Counselling 상담센터는 고민이 있으신 모든 분께 상담 서비스를 제공하기 위해 2018년 4월에 문을 열었습니다.",
      "Well Counselling은 개인상담, 집단상담, 가족상담 등을 통해서 여러분의 자신에 대한 이해를 돕고 내적 성장을 이룰 수 있도록 적극 지원하겠습니다."
    ]
  }

  const messageField2 = {
    title: "INTRODUCTION",
    message: [
      "마음을 나눌 곳이 필요한가요? 머릿속이 복잡해 지고 있나요?"
    ]
  }

  return (
    <div>      
      <Header data={headerField} />             
      <ImageCarousel />
      {/* <h1 style={{fontWeight: "bold", textAlign: "center", padding: "1em"}}>WELL COUNSELLING 에 오신 것을 환영합니다</h1> */}
      <MessageContainer data={messageField} />
      <MessageContainer data={messageField1} />
      <MessageContainer data={messageField} />
      <MessageContainer data={messageField2} />
    </div>
  )
}
