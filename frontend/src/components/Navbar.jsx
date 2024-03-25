import React from 'react'
import Header from './Header'
import marquee from '../../public/data/marquee.json'
import Image from 'next/image'
import { Images } from '../../public/assets'
import Marquee from "react-fast-marquee";

const Navbar = () => {
    return (
        <>
            <Header />
            <div className='navbar_container flex border-b-4 border-b-black flex-col sm:flex-row'>
                <div className='marquee basis-[70%] flex items-center justify-center overflow-x-hidden border-b-4 sm:border-none'>
                    <Marquee>
                        {
                            marquee.map((item, index) => (
                                <>

                                    <span key={index} className="mx-4 text-[40px] font-dmSans-medium">{item.items}</span>
                                    <Image src={Images.marquee} className='mx-4' height={40} width={40} />
                                </>
                            ))
                        }
                    </Marquee>
                </div>
                <div className='links flex items-center justify-center font-dmSans-medium bg-yellow-light text-[40px] sm:text-[56px] basis-[30%]  sm:border-l-4 '>
                    LOGIN
                </div>
            </div>

        </>
    )
}

export default Navbar