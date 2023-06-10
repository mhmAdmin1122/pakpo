'use client'
import React, { useState } from 'react'
import {MdError} from 'react-icons/md'

export default function ContactForm() {
    const [fullname, setFulname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [formEroor, setFormError] = useState('');

    const handleOnSubmit = async (e:any) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                message
            }),
        });

        const { msg } = await res.json()
        setError(msg);
    };

    const fullNameOnChange = (e:any) => {
        setFulname(e.target.value)
        const value = e.target.value;
        let valueLength = value.length;
        let eror = ""
        if (valueLength <= 2) {
            eror = "used more then 2 character"
            console.log(eror)
            setFormError(eror)
        } 
        else if(valueLength > 2 && valueLength >=50){
            eror = ""
            console.log(eror)
            setFormError(eror)
        }else{
            eror = ""
            console.log(eror)
            setFormError(eror)
        }
        
        if(valueLength > 50){
            eror = "Please used leser then 50 chracter in a first name"
            console.log(eror)
            setFormError(eror)
        }
        
    }

    return (
        <>
            <form className='py-4 mt-4 border-t flex flex-col gap-5' onSubmit={handleOnSubmit}>

                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input onChange={fullNameOnChange} value={fullname} type="text" id='fullname' placeholder='Jhon Doe' />
                    <div className="px-5 py-2 text-red-600 flex"><b>{formEroor && <div className='flex items-center'><MdError className='mr-2' />{formEroor}</div>}</b></div>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id='email' placeholder='jhon@gmail.com' required />
                </div>

                <div>
                    <label htmlFor="message">Your Message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='h-32' id="message" placeholder='Type your message here...'></textarea>
                </div>

                <button className='bg-green-700 p-3 text-white font-bold' type='submit'>Send</button>

            </form>

            <div className='bg-slate-100 flex flex-col my-5'>
                <div className="px-5 py-2 text-red-600">
                    Error Message <br />
                    <b>{formEroor}</b>
                </div>
            </div>
        </>
    )
}
