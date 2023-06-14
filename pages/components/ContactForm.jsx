import axios from 'axios';
import React, { useState } from 'react'

const ContactForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    async function contactUs(ev) {
        ev.preventDefault()
        const data = {fullName, email, phone, message}
        await axios.post('/api/contacts', data)
    }


    return (
        <form className='grid py-4 items-center justify-center' onSubmit={contactUs}>

            <label className='font-bold text-lg'>Full Name:<code className='text-red-600 cursor-pointer' title='Required'>*</code></label>
            <input value={fullName} onChange={ev => setFullName(ev.target.value)} className='border-2 border-gray-200 shadow-md shadow-gray-300 rounded-lg my-3 outline-none px-6 py-2 w-96 h-10' type="text" name="fullName" placeholder='Jhon Doe' title='Enter your Full Name' />

            <label className='font-bold text-lg'>E-mail:<code className='text-red-600 cursor-pointer' title='Required'>*</code></label>
            <input value={email} onChange={ev => setEmail(ev.target.value)} className='border-2 border-gray-200 shadow-md shadow-gray-300 rounded-lg my-3 outline-none px-6 py-2 w-96 h-10' type="email" name="email" placeholder='example@xyz.com' title='Enter Your Email' />

            <label className='font-bold text-lg'>Phone:<code className='text-red-600 cursor-pointer' title='Required'>*</code></label>
            <input value={phone} onChange={ev => setPhone(ev.target.value)} className='border-2 border-gray-200 shadow-md shadow-gray-300 rounded-lg my-3 outline-none px-6 py-2 w-96 h-10' type="number" name="phone" placeholder='+1-000-0000-000' title='Enter Your Phone' />

            <label className='font-bold text-lg'>Message:<code className='text-red-600 cursor-pointer' title='Required'>*</code></label>
            <textarea value={message} onChange={ev => setMessage(ev.target.value)} className='border-2 border-gray-200 shadow-md shadow-gray-300 rounded-lg my-3 outline-none px-6 py-2 w-96 max-h-36 min-h-max' name="message" cols={30} rows={10} placeholder='Explain Your Need...' title='Enter Your Message' ></textarea>

            <div className="submit_btn grid items-center justify-center">
                <button type='submit' className='bg-green-700 text-white font-extrabold px-6 py-4 w-fit rounded-lg'>
                    Submit
                </button>
            </div>

        </form>
    )
}

export default ContactForm;
