import React from 'react'
import Achivement from '../Achivement/Achivement'
import Banner from '../Banner/Banner'
import DemoTestSection from '../DemoTest/DemoTestSection'
import Subjects from '../Subjects/Subjects'
import Testimonial from '../Testimonial/Testimonial'

const HomePage = () => {
  return (
    <>
      <Banner />
      <DemoTestSection />
      <Subjects />
      <Achivement></Achivement>
      <Testimonial />

    </>
  )
}

export default HomePage
