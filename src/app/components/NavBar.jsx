"use client";

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'
import Image from "next/image";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <Image src={Logo} alt='Logo Image' style={{width: '100px'}}/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex ml-[20px]'>
            <li className='mr-6'>
            <Link to="home" smooth={true} duration={500}>
                 Home
            </Link>
            </li>
            <li className='mr-6'>
            <Link to="about" smooth={true} duration={500}>
                 About
            </Link>
            </li>
            <li className='mr-6'>
            <Link to="projects" smooth={true} duration={500}>
                 Projects
            </Link>
            </li>
            <li className='mr-6'>
            <Link to="contact" smooth={true} duration={500}>
                 Contact
            </Link>
            </li>
        </ul>


        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                 Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                 About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                 Projects
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                 Contact
            </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/in/mauricio-zorzan/' target="_blank" className='flex justify-between items-center w-full text-gray-300 p-4'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href='https://github.com/mauzorzan' target="_blank" className='flex justify-between items-center w-full text-gray-300 p-4'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href='mailto:mauricio@u.yale-nus.edu.sg' className='flex justify-between items-center w-full text-gray-300 p-4'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href='https://github.com/mauzorzan/resume/blob/main/Mauricio_Resume.pdf' target='_blank' className='flex justify-between items-center w-full text-gray-300 p-4'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar