"use client"
import React from 'react'
import Header from './header'
import marquee from '../../public/data/marquee.json'
import Image from 'next/image'
import { Images } from '../../public/assets'
import { usePathname } from 'next/navigation'
import Marquee from 'react-fast-marquee'
const Navbar = () => {


    const pathname = usePathname();



    return (
        <>
            <Header />
            <div className='navbar_container flex border-b-4 border-b-black'>
                <div className='marquee basis-[70%] flex overflow-hidden items-center justify-center'>

                    <div className="relative flex w-full overflow-x-hidden bg-white">

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



                </div>
                <div className='links flex items-center justify-center font-dmSans-bold bg-yellow-light text-[56px] basis-[30%] border-l-4 border-b-black'>
                    {
                        pathname ? (
                            <>
                                Login
                            </>
                        ) :
                            (
                                <>
                                    Home
                                </>
                            )
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar