import React, { useState } from 'react'
import axios from 'axios'

const PopularCourseDash = () => {
    
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState<any>('')
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
        const data = { name, about, price, category, image }
        await axios.post('/api/popularCourse', data)
    };
    return (
        <>
            <form className='popCourse-Dash grid px-36 items-center justify-center' onSubmit={handleSubmit}>
                <h1 className='font-bold text-3xl py-8 text-center'>Add Popular Courses to <b className='text-green-700'>DevPak</b></h1>
                <label htmlFor="name">Course Name:</label>
                <input type="text" placeholder='Course Name' id='name' name='name' value={name} onChange={ev => setName(ev.target.value)}/>
                <label htmlFor="about">Course Description:</label>
                <textarea name="about" id="about" cols={30} rows={10} placeholder='About Course' onChange={ev => setAbout(ev.target.value)}></textarea>
                <label htmlFor="price">Course Price {"(in USD)"}:</label>
                <input type="number" name="price" id="price" placeholder='$10...' onChange={ev => setPrice(ev.target.value)} />
                <label htmlFor="category">Course Category:</label>
                <input type="text" name="category" id="category" placeholder='Category' onChange={ev => setCategory(ev.target.value)} />
                <label htmlFor="image">Course Pic:</label>
                <input type="file" name="image" id="image" onChange={handleFileChange} />
                <div className="submit-btn py-4 grid items-center justify-center">
                    <button type="submit" className='bg-green-700 text-white px-6 py-2 rounded-lg font-medium'>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default PopularCourseDash
