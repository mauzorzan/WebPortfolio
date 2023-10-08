import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import {SiJavascript, SiTailwindcss, SiNextdotjs, SiHtml5, SiPython, SiDjango, SiGit, SiGithub, SiTestrail} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'


const SkillsCards = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
    setIsFlipped(!isFlipped)
    }

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div>
                <div onClick={flipCard} className='h-[120px] flex justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white  items-center'>
                    <p className='my-4'>Front-End</p>
                    </div>
                </div>
                
                <div onClick={flipCard} className='shadow-md pl-6 py-2 shadow-[#040c16] hover:scale-110 duration-500 border border-white text-center'>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Javascript</div>
                        <SiJavascript />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>HTML</div>
                        <SiHtml5 />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>React</div>
                        <FaReact />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Tailwind</div>
                        <SiTailwindcss />
                    </div>
                    <div className='flex items-center'>
                        <div className='mr-2'>NextJS</div>
                        <SiNextdotjs />
                    </div>
                    </div>


            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div>
                <div onClick={flipCard} className='h-[120px] flex justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white items-center'>
                    <p className='my-4'>Back-End</p>
                    </div>
                
                </div>
                <div onClick={flipCard} className='shadow-md pl-6 py-2 shadow-[#040c16] hover:scale-110 duration-500 border border-white text-center'>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Python</div>
                        <SiPython />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Django</div>
                        <SiDjango />
                    </div>
                    
                    </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div>
                <div onClick={flipCard} className='h-[120px] flex justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white items-center'>
                    <p className='my-4'>Other tools</p>
                    </div>
                
                </div>
                <div onClick={flipCard} className='shadow-md pl-6 py-2 shadow-[#040c16] hover:scale-110 duration-500 border border-white text-center'>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Git</div>
                        <SiGit />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>Github</div>
                        <SiGithub />
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='mr-2'>TestRail</div>
                        <SiTestrail />
                    </div>
                    </div>
            </ReactCardFlip>
    </div>
  )
}

export default SkillsCards