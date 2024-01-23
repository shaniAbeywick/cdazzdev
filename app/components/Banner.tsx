import React from 'react'

function Banner() {
    return (
        <div>
            <div id="sticky-banner"  className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-0 bg-blue-300 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="inline-flex p-1 me-3 bg-white rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                            </svg>
                            <span className="sr-only">Light bulb</span>
                        </span>
                        <span className='text-white font-bold text-base'>Get Big Discount For a Limited time <a href="https://flowbite.com" className="text-white font-bold dark:text-blue-500"></a></span>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center rounded-full w-5 h-5 bg-red-700  items-center text-white hover:bg-gray-200 hover:text-gray-900 text-sm dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Banner
