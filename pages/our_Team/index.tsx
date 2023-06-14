import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Head from 'next/head'
import axios from 'axios'

const OurTeam = () => {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios.get('/api/teams').then(res => {
      setTeams(res.data)
    })
  }, []);

  return (
    <>
      <Head>
        <title>DevPak || Our Staf</title>
      </Head>
      <Layout>
        <h1 className='text-center font-bold text-3xl py-8'>Our Team</h1>
        {teams.map((teams) => (
          <Card data={teams} key={teams.memberPosition}/>
        ))}
      </Layout>
    </>
  )
}

export default OurTeam;