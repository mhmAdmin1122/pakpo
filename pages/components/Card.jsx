/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({
      // Customize AOS options here (easing, duration, etc.)
    });
  }, []);
  return (
    <div className='card px-32 grid items-center justify-center justify-items-center'
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div className={'flex w-full items-start justify-center border-2 border-gray-200 shadow-md shadow-gray-300 rounded-lg overflow-hidden'}>
        <div className="cardImage pr-4 h-full w-1/4">
          <img src="/img/user-team.jpg" alt="member-pic" className='w-full h-full' />
        </div>
        <div className="card-body w-3/4 py-6 pr-12">
          <b className='text-2xl py-6'>{data.memberName}</b>
          <h1 className='mr-2 text-gray-600 text-lg font-bold py-2'>Position: {data.memberPosition}</h1>
          <h1 className='text-gray-600 mr-2 text-lg font-bold py-2'>Age: {data.age}</h1>
          <h1 className='text-justify'>{data.bio.slice(0, 300)}....</h1>
        </div>
      </div>
      <div className="linkLinesToMember h-20 w-2 bg-green-700 grid items-center justify-center"></div>
      <div className="linkLinesToMember h-10 w-40 bg-green-700 grid items-center justify-center rounded-t-lg border-2 border-t-green-600 border-x-green-600 border-b-0 shadow-md shadow-gray-300 mb-2 text-white font-medium">DevPak Team</div>
    </div>
  )
}

export default Card
