import React from 'react'
import TeamDashBoard from '../components/TeamDashBoard'
import Layout from '../components/Layout'
import Head from 'next/head'

const index = () => {
    return (
        <>
            <Head>
                <title>DevPak || Team-Member generator</title>
            </Head>
            <Layout>
                <TeamDashBoard />
            </Layout>
        </>
    )
}

export default index;
