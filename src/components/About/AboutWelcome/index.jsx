import Image from 'next/image'
import React from 'react'

const AboutWelcome = () => {
  return (
    <section>
        <figure className='relative overflow-hidden pb-[28.56%]'>
            <Image
            src={"/images/about-banner.jpg"}
            fill
            alt='about banner'
            className='object-cover'
            />
        </figure>
        <div className='text-center py-7 lg:py-12'>
            <h1 className='h2 ff-2 mb-3'>Welcome to Conscious Namaaz</h1>
            <p className='text-xl tracking-[-0.2px]'>Making Namaaz more Meaningful & Powerful</p>
        </div>
    </section>
  )
}

export default AboutWelcome