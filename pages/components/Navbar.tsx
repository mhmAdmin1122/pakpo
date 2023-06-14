import React, { useState } from 'react'
import LogoImage from './LogoImage'
import logo from '@/public/img/logo.png'
import Link from 'next/link'
import SigIn_Out from './SigIn_Out'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = (event: any) => {
        setActive(current => !current);
    };

    return (
        <nav className='flex items-center justify-between w-full px-10 py-2 shadow-md shadow-gray-200'>
            <div className="logoContainer">
                <Link href={"/"} title='Developer Pakistan || Home'><LogoImage Src={logo} claas={"w-16 h-16  cursor-pointer"}/></Link>
            </div>
            <div className="tabsBox_Search">
                <ul className="tabs flex items-center justify-center gap-8">
                    <Link href={"/"} ><li className='relative font-bold tab'>Home</li></Link>
                    <div onClick={handleClick} className='tab cursor-pointer'>
                        <li className={active ? 'relative about-Tab active' : 'relative about-Tab'}>
                            <b>About</b>
                            <span className="left-Icon"></span>
                            <span className="right-Icon"></span>
                            {active && <div className="ListOfAbout absolute z-20 top-10 w-44 -left-14 transition-all ease-in-out duration-1000">
                                <ul className='bg-green-700 text-white px-4 py-2 rounded-b-lg rounded-t-md'>
                                    <Link href={"/about_Us"}><li className='py-2 font-semibold'>About Us</li></Link>
                                    <Link href={"/contact_Us"}><li className='py-2 font-semibold'>Contact Us</li></Link>
                                    <Link href={"/term_Services"}><li className='py-2 font-semibold'>Term & Services</li></Link>
                                    <Link href={"/our_Team"}><li className='py-2 font-semibold'>Our Team</li></Link>
                                </ul>
                            </div>}
                        </li>
                    </div>
                    <Link href={"/services"} ><li className='relative font-bold tab'>Services</li></Link>
                    <Link href={"/certificate"} ><li className='relative font-bold tab'>Certificate</li></Link>
                </ul>
            </div>
            <div className="logIn_LogOut">
                <SigIn_Out />
            </div>
        </nav>
    )
}

export default Navbar
