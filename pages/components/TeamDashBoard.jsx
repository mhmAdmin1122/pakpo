/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import axios from 'axios'

const TeamDashBoard = () => {

    const [memberName, setMemberName] = useState('');
    const [memberPosition, setMemberPosition] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState(null);
    const [bio, setBio] = useState('');

    const handleFileChange = (event) => {
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

    async function handleSubmit(event) {
        event.preventDefault();
        const data = { memberName, memberPosition, age, image, bio }
        await axios.post('/api/teams', data)
    };

    return (

        <form onSubmit={handleSubmit} className='grid px-36 addTeam-Form items-center justify-center'>

            <h1 className='font-bold text-3xl py-8 text-center'>Add Member to <b className='text-green-700'>DevPak</b> Team</h1>

            <label htmlFor="memberName">Member Name:</label>
            <input value={memberName} onChange={ev => setMemberName(ev.target.value)} type="text" name="memberName" id="memberName" placeholder='Jhon Doe' />

            <label htmlFor="memberPosition">Member Position:</label>
            <input value={memberPosition} onChange={ev => setMemberPosition(ev.target.value)} type="text" name="memberPosition" id="memberPosition" placeholder='i.e CEO, Employee, Manager, Acountent, etc...' />

            <label htmlFor="age">Member Age:</label>
            <input value={age} onChange={ev => setAge(ev.target.value)} type="number" name="age" id="age" placeholder='18-44' />

            <label htmlFor="image">Member Pic:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} id='image' name='image' />
            {image && <img src={image} alt="Selected" className='w-14 h-14 mt-3 rounded-md' />}

            <label htmlFor="bio">Member Bio:</label>
            <textarea value={bio} onChange={ev => setBio(ev.target.value)} name="bio" id="bio" rows={30} placeholder='Write few lines about member...'></textarea>

            <div className="submit-btn py-4 grid items-center justify-center">
                <button type="submit" className='bg-green-700 text-white px-6 py-2 rounded-lg font-medium'>
                    Submit
                </button>
            </div>

        </form>

    )
}

export default TeamDashBoard;