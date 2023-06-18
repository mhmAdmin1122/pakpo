import Layout from "./components/Layout";
import Head from "next/head";
import HeroBaner from "./components/HeroBaner";
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./components/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularCoursesCard from "./components/PopularCoursesCard";
import MapIframe from "./components/MapIframe";
import Link from "next/link";
import { RiWhatsappFill, RiTwitterFill, RiShareFill } from 'react-icons/ri'

export default function Home() {
  const [service, setService] = useState([]);
  const [proCourses, setProCourses] = useState([]);
  useEffect(() => {
    axios.get('/api/service').then(res => {
      setService(res.data)
    });
    axios.get('/api/popularCourse').then(res => {
      setProCourses(res.data)
    });
    AOS.init({
      // Customize AOS options here (easing, duration, etc.)
    });
  }, []);
  return (
    <div>
      <Head>
        <title>DevPak || Home</title>
      </Head>
      <Layout>
        <HeroBaner />
        {/* Services Card */}
        <h1 className='text-3xl font-bold text-center cursor-context-menu py-8'>
          <b className='text-green-700 cursor-pointer transition-all ease-in-out duration-1000 hover:underline'>DevPak </b>
          Services
        </h1>
        <div className="cardServivr-box flex flex-wrap justify-center items-start" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          {service.map((service: any) => (
            <ServiceCard data={service} key={service._id} />
          ))}
        </div>
        {/* Popular Course */}
        <h1 className='text-3xl font-bold text-center cursor-context-menu py-8'>
          <b className='text-green-700 cursor-pointer transition-all ease-in-out duration-1000 hover:underline'>DevPak </b>
          Popular Courses
        </h1>
        <div className="cardProCourses-box flex flex-wrap justify-center items-start">
          {
            proCourses.map((data: any) => (
              <PopularCoursesCard data={data} key={data._id} />
            ))
          }
        </div>
        {/* Contact Detail */}
        <div className="px-32 h-full my-6">
          <h1 className='text-3xl font-bold text-center cursor-context-menu py-8'>
            <b className='text-green-700 cursor-pointer transition-all ease-in-out duration-1000 hover:underline'>DevPak </b>
            Contact Details
          </h1>
          <div className="contact-detail-List">
            <ul className="contactNumbersList">
              <li className="grid">
                <div className="flex">
                  <b className="text-2xl"><RiShareFill /></b>
                  <b>Share Our Contact on</b>
                </div>

                <div className="flex gap-4">
                  <Link href={"https://wa.me/?text=03257390045"} target="blank" className="flex items-center gap-1 bg-gray-100 border-2 border-gray-200 shadow-lg shadow-gray-300 w-fit px-6 py-2 rounded-xl my-4">
                    <b>WhatsApp</b>
                    <b className="text-green-700 text-2xl"><RiWhatsappFill /></b>
                  </Link>
                  <Link href={"https://twitter.com/intent/tweet?url=03257390045"} target="blank" className="flex items-center gap-1 bg-gray-100 border-2 border-gray-200 shadow-lg shadow-gray-300 w-fit px-6 py-2 rounded-xl my-4">
                    <b>Twitter</b>
                    <b className="text-blue-500 text-2xl"><RiTwitterFill /></b>
                  </Link>
                </div>

              </li>
            </ul>
          </div>

          <h1 className="text-2xl font-bold">Direction To DevPak Office</h1>
          <MapIframe />
          <div title="Go to DevPak Contact Us Page" className="grid items-center justify-center my-4">
            <button className="bg-green-700 text-white rounded-lg px-6 py-2 font-medium">
              <Link href="/contact_Us">More Details &rarr;</Link>
            </button>
          </div>
        </div>
        {/*  */}
      </Layout>
    </div>
  )
}
