import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout'
import Head from 'next/head'
import LogoImage from '../components/LogoImage';
import logo from '../../public/img/logo.png'

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      // Customize AOS options here (easing, duration, etc.)
    });
  }, []);

  return (
    <>
      <Head>
        <title>DevPak || About Us</title>
      </Head>
      <Layout>
        <div className="about_Us-page grid justify-items-center px-32">
          <div className="flex items-center justify-center my-4"  data-aos="zoom-in-right" data-aos-duration="3000">
            <div className="border-2 border-y-green-700 border-l-green-700 rounded-l-md" >
              <LogoImage Src={logo} claas={"w-12 h-12 cursor-pointer py-2.5 px-2.5"} />
            </div>
            <h1 className='font-bold text-3xl my-2 bg-green-700 text-white px-4 py-2 rounded-r-md'>Welcome To DevPak</h1>
          </div>
          <p>DevPak is a Professional Educational, IT Study Platform. Here we will provide you only interesting content, which you will like very much. We{"'"}re dedicated to providing you the best of Educational, IT Study, with a focus on dependability and www.devpak.tech. We{"'"}re working to turn our passion for Educational, IT Study into a booming online website. We hope you enjoy our Educational, IT Study as much as we enjoy offering them to you.</p>
          <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
          <b className='text-blue-600 my-4'>Thanks For Visiting Our Site</b>
          <b className='text-pink-800'>Have a nice day!</b>
        </div>
      </Layout>
    </>
  )
}

export default AboutUs
