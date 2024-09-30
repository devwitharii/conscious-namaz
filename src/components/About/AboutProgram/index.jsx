"use client"
import React, { useState } from 'react'
import Container from '../../Container'
import ProgramOne from './programOne';
import ProgramTwo from './programTwo';
import ProgramFour from './programFour';
import ProgramThree from './programThree';
import Animate from '../../Animate';

const AboutProgram = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className='bg-[#F6F6F6] pt-5 lg:pt-14 pb-10 text-primary'>
        <Container>
            <Animate as='h2' className='h2 ff-2 text-center mb-10 lg:mb-14'>Programs</Animate>
            <div className='xl:px-14'>
                <Animate className="flex gap-2.5 sm:gap-5 lg:gap-10 overflow-auto">
                    {
                        programs.map((program, index)=>(
                            <div 
                            key={index} 
                            className={`w-[300px] flex-shrink-0 lg:w-[320px] p-5 border border-primary cursor-pointer transition-colors text-center flex justify-center items-center xl:hover:bg-primary xl:hover:text-white ${activeTabIndex === index? "bg-primary text-white" : ""}`}
                            onClick={()=>setActiveTabIndex(index)}
                            >
                                <span className='lg:text-lg uppercase font-semibold'>{program}</span>
                            </div>
                        ))
                    }
                </Animate>
            </div>
            <div className='max-w-[1180px] mx-auto mt-10 lg:mt-20 xl:mt-24'>
                    {
                        activeTabIndex === 0 ? <ProgramOne/> : 
                        activeTabIndex === 1 ? <ProgramTwo/> : 
                        activeTabIndex === 2 ? <ProgramThree/> :
                        activeTabIndex === 3 ? <ProgramFour/> :""
                        
                    }
            </div>
        </Container>
    </section>
  )
}

export default AboutProgram

const programs = [
    "Three-day Tahajjud Namaaz Program",
    "Personalised and Guided Islamic Meditation",
    "Group Meditations",
    "Zikr Meditations for powerful Healing",
]