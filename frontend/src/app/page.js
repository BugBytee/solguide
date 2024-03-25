import React from 'react'
import "./globals.css";
import Image from 'next/image';
import { Images } from '../../public/assets';
const Home = () => {
  return (
    <>
      <div className='border-b-black border-b-4 flex flex-col sm:flex-row'>
        <div className='left flex flex-col justify-center basis-[50%] sm:border-r-4 px-10 sm:px-20 py-10 bg-yellow-deep '>
          <span className='text-[40px] sm:text-[64px] font-dmSans-bold py-4'>Developers’ Stop</span>
          <span className='text-[20px] sm:text-[36px] font-dmSans-medium pb-8'>A community tool for the developers to get issue resolved.</span>
          <button className="text-[20px] sm:text-[36px] font-dmSans-regular flex align-center justify-center p-2 cursor-pointer items-center sm:w-[380px] bg-black text-white"
          >Contributions</button>
        </div>
        <div className='right flex flex-col basis-[50%] items-center justify-center border-t-4 sm:border-none bg-orange py-10 px-10 sm:x-20'>
          <Image src={Images.abstract} alt='abstract' />
        </div>
      </div>
    </>
  )
}

export default Home