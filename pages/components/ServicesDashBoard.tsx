import React, {useState} from 'react'
import Layout from './Layout'
import Head from 'next/head'
import axios from 'axios';

const ServicesDashBoard = () => {

    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState<any>('');
    
    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImage(reader.result);
            console.log(reader.result);
        }
        reader.onerror = (error) => {
            console.log('Error', error)
        }
    };

    async function handleSubmit(event:any) {
        event.preventDefault();
        const data = { title, about, image }
        await axios.post('/api/service', data)
    };

    return (
        <>
            <Head>
                <title>DevPak || Services Cards Generator</title>
            </Head>
            <Layout>
                <form onSubmit={handleSubmit} className='service-add-from grid px-36 items-center justify-center'>
                    <label htmlFor="title">Service Title:</label>
                    <input value={title} onChange={ev => setTitle(ev.target.value)} type="text" name="title" id="title" placeholder='Service Title' />
                    <label htmlFor="about">About Service:</label>
                    <textarea value={about} onChange={ev => setAbout(ev.target.value)} name="about" id="about" cols={30} rows={10} placeholder='Describe Service'></textarea>
                    <label htmlFor="image">Service Pic:</label>
                    <input type="file" name="image" id="image" onChange={handleFileChange} />
                    <div className="py-4 grid items-center justify-center">
                        <button type="submit" className='bg-green-700 text-white px-6 py-2 rounded-lg font-medium'>Submit</button>
                    </div>
                </form>
            </Layout>
        </>
    )
}

export default ServicesDashBoard
