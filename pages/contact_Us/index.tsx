import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Head from 'next/head'

const contactUs = () => {
  return (
    <>
      <Head>
        <title>DevPak || Contact Us</title>
      </Head>
      <Layout>
        <b className='text-center w-full flex items-center justify-center text-3xl mt-4 cursor-context-menu break-words'>Contact with <i className='text-green-700 px-4 py-2 rounded-lg transition-all duration-1000 ease-in-out font-extrabold cursor-pointer hover:bg-green-700 hover:text-white' title='Developer Pakistan'>DevPak</i></b>
        <ContactForm />
      </Layout>
    </>
  )
}

export default contactUs
