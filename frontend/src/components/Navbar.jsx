"use client"
import React from 'react'

import marquee from '../../public/data/marquee.json'
import Image from 'next/image'
import { Images } from '../../public/assets'
import { usePathname } from 'next/navigation'
import Marquee from 'react-fast-marquee'
import { Header } from '.'
import Link from 'next/link'
const Navbar = () => {


    const pathname = usePathname();



    return (
        <>
            <Header />
            <div className='navbar_container flex border-b-4 border-b-black flex-col sm:flex-row'>
                <div className='marquee basis-[70%] flex items-center justify-center overflow-x-hidden border-b-4 sm:border-none'>
                    <Marquee>
                        {
                            marquee.map((item, index) => (
                                <>
                                    <div className='flex flex-row'>

                                        <span key={index} className="mx-4 text-[40px] font-dmSans-medium">{item.items}</span>
                                        <Image src={Images.marquee} className='mx-4' height={40} width={40} />
                                    </div>
                                </>
                            ))
                        }
                    </Marquee>



                </div>
                {
                    pathname === '/' ? (
                        <>
                            <Link href='/creation' className='links flex items-center justify-center font-dmSans-medium bg-yellow-light hover:bg-yellow-deep  text-[40px] sm:text-[56px] basis-[30%]  sm:border-l-4 cursor-pointer'>
                                Login
                            </Link>
                        </>
                    ) :
                        (
                            <Link href='/' className='links flex items-center justify-center font-dmSans-medium bg-yellow-light hover:bg-yellow-deep  text-[40px] sm:text-[56px] basis-[30%]  sm:border-l-4 cursor-pointer'>
                                Home
                            </Link>
                        )
                }
            </div>

        </>
    )
}

export default Navbar