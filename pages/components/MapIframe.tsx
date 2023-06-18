import React from 'react'

const MapIframe = () => {
    return (
        <div className='border-2 border-gray-200 shadow-lg shadow-gray-300 grid items-center my-2 h-56 rounded-lg w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217.28551110495482!2d71.6569898124141!3d29.38293055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1686939059072!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'>
            </iframe>
        </div>
    )
}

export default MapIframe
