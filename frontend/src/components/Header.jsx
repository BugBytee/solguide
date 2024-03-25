import Image from 'next/image'
import React from 'react'
import { Images } from '../../public/assets'

const Header = () => {
    return (
        <>
            <div className='header_container border-b-black border-b-4 py-4 px-10 sm:px-20 sm:py-10 flex items-center justify-center'>
                <Image src={Images.header} alt='header' width={1180} height={312} />
            </div>
        </>
    )
}

export default Header