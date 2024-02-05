"use client";
import React from 'react'
import Image from 'next/image';


function InstaFeed() {
    return (
        <div className='bg-blue-100'>
            <div className='lg:container p-10 py-28'>
                {/* instagram section title */}
                <h3 className='sm:text-5xl text-3xl font-bold text-center'>
                    <span className='text-white'>
                        Follow us on
                    </span>{' '}
                    <span className='text-blue-300'>
                        Instagram
                    </span>

                </h3>
                {/* instagram section sub heading */}
                <p className='sm:text-base text-sm font-normal text-white text-center mx-auto max-w-[60ch] mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore obcaecati Laudantium dolore obcaecati.</p>
                {/* instagram section follow us button */}
                <div className="flex md:justify-end justify-center mb-8 mt-10">
                   <a href="https://www.instagram.com/cdazzdev/">
                    <button type="button" className="text-white bg-red-100 shadow-0  border-0 focus:ring-0 focus:outline-none  font-bold rounded-full text-base px-7 py-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform transition-transform hover:scale-90">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                            <g clip-path="url(#clip0_110_1805)">
                                <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_110_1805">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                         Follow us
                    </button>
                    </a>
                </div>
                {/* instagram section slider */}
                <div className="slider-insta">
                    <div className="slide-track">
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C2670S7sTYi/">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Happy-Independence-Day-Sri-Lanka-🇱🇰-SriLanka-independenceday-Celebrations-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C21UbkKtDxl/">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Happy-Birthday-to-one-of-our-team-member-Chamal-Ayesh-Wickramanayaka-On-behalf-of-the-entire-CDAZZDEV-family-we-extend-the-warmest…-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C2jderCvODq/?img_index=2">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Ring-out-the-old-and-ring-in-the-new-Cheers-to-another-year-Here’s-to-whatever-comes-next-celebration-eventatofc-2024newyear-Instagram(1).png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C2jderCvODq/?img_index=6">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Ring-out-the-old-and-ring-in-the-new-Cheers-to-another-year-Here’s-to-whatever-comes-next-celebration-eventatofc-2024newyear-Instagram(2).png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C2jderCvODq/?img_index=1">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Ring-out-the-old-and-ring-in-the-new-Cheers-to-another-year-Here’s-to-whatever-comes-next-celebration-eventatofc-2024newyear-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="http://www.instagram.com">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/_factsyoudidntknow-Follow-to-know-what-you-Don’t-know-softwaresolutionscompany-ITknowledge-KnowledgeIsPower-facts-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C2670S7sTYi/">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/Happy-Independence-Day-Sri-Lanka-🇱🇰-SriLanka-independenceday-Celebrations-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                        <div className="slide-insta">
                        <a href="https://www.instagram.com/p/C21Sap9tZtF/">
                            <div className="relative insta-card max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image src="/images/_factsyoudidntknow-Follow-to-know-what-you-Don’t-know-softwaresolutionscompany-ITknowledge-KnowledgeIsPower-facts-Instagram.png" alt='instaImg' width={744} height={719} className='rounded-xl' />
                                <div className="overlay-insta absolute rounded-lg flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='instaImg opacity-0'>
                                        <g clip-path="url(#clip0_110_1805)">
                                            <path d="M9.99992 13.4258C11.8918 13.4258 13.4255 11.8922 13.4255 10.0003C13.4255 8.1084 11.8918 6.57473 9.99992 6.57473C8.10803 6.57473 6.57436 8.1084 6.57436 10.0003C6.57436 11.8922 8.10803 13.4258 9.99992 13.4258Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 6.0054 0 4.0081 0.95188 2.5695C1.37694 1.9271 1.9271 1.37694 2.5695 0.95188C4.0081 0 6.0054 0 10 0C13.9946 0 15.9919 0 17.4305 0.95188C18.0729 1.37694 18.6231 1.9271 19.0481 2.5695C20 4.0081 20 6.0054 20 10C20 13.9946 20 15.9919 19.0481 17.4305C18.6231 18.0729 18.0729 18.6231 17.4305 19.0481C15.9919 20 13.9946 20 10 20C6.0054 20 4.0081 20 2.5695 19.0481C1.9271 18.6231 1.37694 18.0729 0.95188 17.4305C0 15.9919 0 13.9946 0 10ZM15.177 10.0003C15.177 12.8595 12.8592 15.1774 9.99992 15.1774C7.14067 15.1774 4.8228 12.8595 4.8228 10.0003C4.8228 7.14104 7.14067 4.82316 9.99992 4.82316C12.8592 4.82316 15.177 7.14104 15.177 10.0003ZM15.3814 5.77957C16.0533 5.77957 16.5979 5.23494 16.5979 4.5631C16.5979 3.89126 16.0533 3.34663 15.3814 3.34663C14.7096 3.34663 14.165 3.89126 14.165 4.5631C14.165 5.23494 14.7096 5.77957 15.3814 5.77957Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_110_1805">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                            

                        </div>
                    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default InstaFeed
