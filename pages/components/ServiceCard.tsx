import React from 'react'
import Image from 'next/image'

const ServiceCard = ({ data }: any) => {
    return (
        <div className="servicesCard w-64 mx-6 border-2 border-gray-200 rounded-md overflow-hidden shadow-xl shadow-gray-300 my-2">

            <div className="Image-bOX cursor-pointer" title={data?.title}>
                <Image src={data?.image} alt='service-Pic' width={255} height={200} />
            </div>

            <div className="card-Body px-2 pt-2 grid justify-center">
                <b className="tilte cursor-pointer">
                    {data?.title}
                </b>
                <h2 className='serivice-desc'>
                    {data?.about.slice(0, 80)}...
                </h2>
                <button className="serviceMore-btn bg-green-700 text-white px-6 py-2 rounded-lg font-medium my-2">
                    Read More &rarr;
                </button>
            </div>

        </div>
    )
}

export default ServiceCard
