import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Head from 'next/head'
import axios from 'axios'

const OurTeam = () => {

  const [teams, setTeams] = useState<string | Boolean | Number | null | never | object | any>([])
  const position: string = teams.memberPosition;
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
        {teams.map((teams:string) => (
          <Card data={teams} key={position} />
        ))}
      </Layout>
    </>
  )
}

export default OurTeam;