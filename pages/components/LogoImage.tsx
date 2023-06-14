import React from 'react'
import Image from 'next/image'

const LogoImage = ({Src, claas}:any) => {
    return (
        <div className="logoImage">
            <Image src={Src} alt='logo-pic' className={claas}/>
        </div>
    )
}

export default LogoImage
