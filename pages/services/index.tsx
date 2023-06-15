import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'

const services = () => {
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

        <div className="servicesCard w-64 mx-6">

          <div className="Image-bOX">
            <Image src={'/img/user-team.jpg'} alt='service-Pic' width={255} height={200} />
          </div>

          <div className="card-Body">
            <b className="tilte">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </b>
            <h2 className='serivice-desc'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit atque omnis ducimus voluptas qui molestias voluptatibus deleniti consequuntur, quasi aperiam ex dolores commodi illum numquam, eveniet, magnam dolorum cum placeat consequatur fugit expedita cupiditate.
            </h2>
            <button className="serviceMore-btn">Read More &rarr;</button>
          </div>

        </div>

      </Layout>
    </>
  )
}

export default services;