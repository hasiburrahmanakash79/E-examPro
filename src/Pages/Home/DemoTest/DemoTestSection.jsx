import React from 'react'
import { Link } from 'react-router-dom'

const DemoTestSection = () => {
  return (
    <section className='grid w-full grid-cols-1 mx-auto my-6 md:w-11/12 md:grid-cols-2 h-96'>
      {/* here will be the muted video for demo test */}

      <div className='inline-flex items-center justify-center rounded-lg'>
        <iframe
          src=''
          className='w-11/12 rounded-lg h-3/4'
          frameborder='0'
        ></iframe>
      </div>
      <div className='space-y-2 text-center md:p-4 md:space-y-6'>
        <h1 className='mt-4 text-2xl'>
          Lorem ipsum dolor sit, amet consectetur.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aliquid
          possimus facilis reprehenderit illum recusandae consequatur, excepturi
          sint inventore voluptatum.
        </p>
        <Link to='/demo-test' className='rounded-full btn btn-accent'>
          Explore How We Take Exams
        </Link>
      </div>
    </section>
  )
}

export default DemoTestSection
