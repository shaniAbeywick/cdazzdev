import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className="bg-blue-400 bg-[url('/images/360_F_542404248_jlW64sl8elujM6epFZB9qRAOb7U0wRZB.png')]">
            <div className="lg:container p-10 py-28">

                {/* logo column of footer */}

                <div className='flex justify-center lg:justify-start'>
                <Image src="/images/logo-light.png" alt='LogoImg' width={130} height={40} />
                    
                </div>

                {/* bottom section of footer */}
                <hr className='mt-10' />

                <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-10 lg:gap-0 mt-10'>
                    <div>
                        <div className="flex gap-4">
                            <a href="#Service" className='text-base text-white font-normal hover:text-blue-300'>Services</a>
                            <a href="/about" className='text-base text-white font-normal hover:text-blue-300'>About Us</a>
                            <a href="/contact" className='text-base text-white font-normal hover:text-blue-300'>Contact Us</a>

                        </div>
                        <div className='text-xs text-white font-normal lg:mt-4 lg:text-left text-center mt-12'>
                            @ 2024 CDAZZ DEV.<br />
                            All rights reserved 
                        </div>
                    </div>
                    <p className='text-xs font-normal text-white text-center lg:text-left'>
                        No.355 D,<br />
                        Agalawatta  Road,<br />
                        Wettawa,<br />
                        Mathugama,<br />
                        SRI LANKA
                    </p>


                </div>

                {/* social media logos */}
                <div className="lg:hidden flex flex-row justify-center gap-10 mt-14">
                    <a href="https://facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='white' width={16} height={16}><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
                    <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white' width={16} height={16}><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>
                    <a href="https://www.pinterest.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='white' width={16} height={16}><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer
