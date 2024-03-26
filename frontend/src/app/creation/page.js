"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Images } from '../../../public/assets'

const Creation = () => {

    const [isRegister, setIsRegister] = useState(true);

    const toggleComponent = () => {
        setIsRegister(!isRegister);
    }


    return (
        <>
            <div className='flex border-b-4 bg-yellow-deep flex-col sm:flex-row'>
                <div className='flex basis-[50%] border-b-4 sm:border-r-4 sm:border-b-0 flex-row px-10 sm:px-20 items-center justify-center'>
                    <Image src={Images.creation} alt='creation' />
                </div>
                <div className='flex basis-[50%] flex-col items-center justify-center px-20 pb-10 sm:pb-0'>
                    <div className='w-auto sm:w-[512px] full_right_container flex-col'>
                        <div className='toggle_container flex flex-row items-center justify-center '>
                            <div className={`flex items-center justify-center font-dmSans-medium text-[32px] ${isRegister ? 'text-white' : 'text-black'}`}>
                                Register
                            </div>
                            <div className='flex items-center justify-center py-10 px-10'>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" value="" className="peer sr-only" />
                                    <div className="peer h-8 w-[70px] rounded-full border-2 border-black bg-yellow-light   after:absolute after:start-[6px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border-2 after:border-black after:bg-white after:transition-all after:content-['']  peer-checked:bg-orange peer-checked:after:translate-x-[37px] peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px]"
                                        onClick={toggleComponent}></div>
                                </label>
                            </div>
                            <div className={`flex items-center justify-center font-dmSans-medium text-[32px] ${!isRegister ? 'text-white' : 'text-black'}`}>
                                Login
                            </div>
                        </div>
                        {
                            isRegister ? (
                                <>
                                    <div className="bg-white h-[340px] flex flex-col justify-center items-center rounded-[16px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-10 px-16 gap-4">
                                        <input className="bg-white w-full flex items-center justify-center rounded-[16px] border-2 border-black p-[10px] font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
                                            placeholder='Username'
                                        />
                                        <input className="bg-white w-full flex rounded-[16px] border-2 border-black p-[10px] font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
                                            placeholder='Email'
                                        />
                                        <input className="bg-white w-full flex rounded-[16px] border-2 border-black p-[10px] font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
                                            placeholder='Password'
                                        />

                                        <button className="flex cursor-pointer items-center rounded-[16px] border-2 border-black bg-orange  px-10 py-3 font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                        >
                                            Register
                                        </button>

                                    </div>
                                </>
                            ) :
                                (
                                    <>
                                        <div className="bg-white h-[340px] flex flex-col justify-center items-center rounded-[16px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-10 px-16 gap-4">

                                            <input className="bg-white w-full flex rounded-[16px] border-2 border-black p-[10px] font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
                                                placeholder='Email'
                                            />
                                            <input className="bg-white w-full flex rounded-[16px] border-2 border-black p-[10px] font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
                                                placeholder='Password'
                                            />

                                            <button className="flex cursor-pointer items-center rounded-[16px] border-2 border-black bg-orange  px-10 py-3 font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                            >
                                                Login
                                            </button>

                                        </div>
                                    </>
                                )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Creation