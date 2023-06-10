import React from 'react'
import Image from 'next/image'

const LogoImage = ({Src}:any) => {
    return (
        <div className="logoImage">
            <Image src={Src} alt='logo-pic' className="w-16 h-16 cursor-pointer"/>
        </div>
    )
}

export default LogoImage
