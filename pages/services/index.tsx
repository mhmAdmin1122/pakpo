import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const [service, setService] = useState([]);
  // const id: string = service._id;
  // console.log(id)
  useEffect(() => {
    axios.get('/api/service').then(res => {
      setService(res.data)
    })
  }, [])
  return (
    <>
      <Head>
        <title>DevPak || Services</title>
      </Head>
      <Layout>
        <h1 className='text-3xl font-bold text-center cursor-context-menu py-8'>
          <b className='text-green-700 cursor-pointer transition-all ease-in-out duration-1000 hover:underline'>DevPak </b>
          Services
        </h1>
        <div className="cardServivr-box flex flex-wrap justify-center items-start">
          {service.map((service: any) => (
            <ServiceCard data={service} key={service._id} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Services;