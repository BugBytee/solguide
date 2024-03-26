import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex items-center justify-center py-2 border-b-4'>


                <a
                    href="https://github.com/BugBytee/solguide"
                    target="_blank"
                    rel="noopener noreferrer" // Add rel attribute for security reasons
                    className="rounded-full border-2 border-black bg-orange px-3 py-1.5 text-sm font-dmSans-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                    Made with 🤍 BugByte
                </a>
            </div>
        </>
    )
}

export default Footer