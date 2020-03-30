import React from 'react'
import ImageCarousel from './ImageCarousel'
import Header from './Header'
import MessageContainer from './MessageContainer'

export default function Intro() {
  const headerField = {
    title: "상담센터 소개"
  }

  const slideImages = [
    'https://pro-essay-writer.com/static/img/regular/Introduction-essay.jpg'
  ];

  const message = {
    title: "Well Counselling에 오신 것을 환영합니다",
    message: [
      "마음을 나눌 곳이 필요한가요? 머릿속이 복잡해 지고 있나요?",
      "누군가에게 털어놓고 싶지만 어디로 가야할지 모르겠다면, 주저하지 말고 Well Counselling을 찾아주세요.",
      "Canada Christian College의 Well 상담센터 Counselling는 고민이 있으신 모든 분께 상담 서비스를 제공하기 위해 2018년 4월에 문을 열었습니다.",
      "Well counselling은 개인상담, 집단상담, 가족상담 등을 통해서 여러분의 자신에 대한 이해를 돕고 내적 성장을 이룰 수 있도록 적극 지원하겠습니다.",
      "이를 통해 각 개인은 보다 건강하고 성숙한 자아실현을 하도록 하고, 부부 및 가족은 더 화목하게 하고, 조직과 사회는 보다 더 조화롭게 될 수 있도록 하고, 이들을 돕는 전문상담사나 강사들은 보다 더 효율적으로 조력할 수 있도록 전문기관이 되겠습니다.",
      "함께 행복한 삶, 따뜻한 사회를 만들어 갔으면 좋겠습니다.",
      "감사합니다."
    ],
    image: {
      url: "https://clearrecoverycenter.com/wp-content/uploads/2017/06/anionasgsa-1.jpeg"
    }
  }

  return (
    <div>
      <Header data={headerField} />
      <ImageCarousel data={slideImages} />
      <MessageContainer data={message} />
    </div>
  )
}
