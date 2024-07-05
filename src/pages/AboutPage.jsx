import React from 'react'
import ContactUsForm from '../components/contactUs/ContactUsForm'
import LearningGrid from '../components/About/LearningGrid'
import StatsComponenet from '../components/About/StatsComponenet'

const AboutPage = () => {
  return (
    <div>
        <StatsComponenet/>
        <LearningGrid/>
      <div className="w-10/12 mx-auto py-8">

        <h2 className="text-3xl font-bold mb-6 text-center my-4 underline">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <h3 className="text-xl font-semibold mb-4 underline">Our Mission</h3>
            <p className="text-gray-700">
              At StuOcean, our mission is to provide high-quality, accessible education to learners
              around the globe. We strive to empower individuals with the knowledge and skills they
              need to succeed in their personal and professional lives.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 underline">Our Vision</h3>
            <p className="text-gray-700">
              Our vision is to create a diverse and inclusive learning community where learners can
              explore their interests, pursue their passions, and achieve their academic and career
              goals. We aim to be a leader in innovative education solutions that make learning
              engaging, interactive, and impactful.
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-xl'>
        <ContactUsForm />
      </div>

    </div>
  )
}

export default AboutPage
