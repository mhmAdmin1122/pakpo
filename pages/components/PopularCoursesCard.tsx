import React from 'react'
import Image from 'next/image'

const PopularCoursesCard = ({ data }: any) => {
    return (
        <>
            <div className="courseCard w-64 mx-6 border-2 border-gray-200 rounded-md overflow-hidden shadow-xl shadow-gray-300 my-2">
                <div className="Image-bOX cursor-pointer relative">
                    <Image src={data?.image} alt='cousre-card' width={255} height={200}/>
                    <div className="badge absolute z-20 top-1.5 right-2 bg-green-700 text-white px-4 py-2 rounded-md">
                        <b>{data.category}</b>
                        <b className='absolute z-30 top-1 right-1'>*</b>
                    </div>
                </div>
                <div className="Body-Box px-2 pt-2 grid justify-center">
                    <b className='cursor-pointer'>{data?.name}</b>
                    <p>{data?.about.slice(0, 135)}...</p>
                    <p>Price: <b>{data?.price}$</b></p>
                    <button className="serviceMore-btn bg-green-700 text-white px-6 py-2 rounded-lg font-medium my-2">
                        Read More &rarr;
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopularCoursesCard;