import React from 'react'

function Footer() {
    return (
        <div className="bg-blue-100 bg-[url('/images/backgroundImg.png')]">
            <div className="lg:container p-10 py-28">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-20 lg:gap-4">
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 130 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M127.001 16.839C126.797 16.751 126.592 16.671 126.386 16.598C125.601 16.323 124.864 16.185 124.173 16.185C123.613 16.185 123.174 16.279 122.857 16.465C122.539 16.652 122.381 16.921 122.381 17.274C122.381 17.491 122.474 17.662 122.661 17.79C122.847 17.918 123.202 18.05 123.725 18.187L126.106 18.746C127.618 19.119 128.705 19.664 129.368 20.38C129.718 20.9 130 22.371 130 23.608C129.812 24.948 129.807 25.939 128.696 26.783C127.585 27.627 126.049 28.049 124.089 28.049C122.089 28.049 120.385 27.751 118.979 27.156C118.038 26.759 117.565 25.698 117.909 24.732C118.281 23.686 119.444 23.209 120.468 23.628C120.724 23.732 120.988 23.827 121.261 23.913C122.231 24.217 123.183 24.369 124.117 24.369C124.696 24.369 125.144 24.28 125.461 24.104C125.779 23.927 125.938 23.682 125.938 23.368C125.938 23.094 125.821 22.872 125.588 22.706C125.354 22.539 124.911 22.387 124.257 22.249L121.961 21.69C120.505 21.376 119.454 20.881 118.81 20.203C118.166 19.527 117.844 18.589 117.844 17.392C117.844 16.431 118.114 15.577 118.656 14.831C119.197 14.086 119.949 13.503 120.91 13.08C121.872 12.658 122.978 12.447 124.229 12.447C125.256 12.447 126.264 12.604 127.254 12.918C127.661 13.047 128.058 13.199 128.443 13.371C129.358 13.781 129.802 14.833 129.444 15.773C129.071 16.754 127.96 17.257 127.001 16.839ZM112.523 10.032C111.141 10.032 110.022 8.906 110.022 7.518C110.022 6.13 111.141 5.005 112.523 5.005C113.904 5.005 115.024 6.13 115.024 7.518C115.024 8.906 113.904 10.032 112.523 10.032ZM112.51 12.038C113.892 12.038 115.012 13.162 115.013 14.551L115.022 25.617C115.023 27.006 113.903 28.133 112.52 28.133C111.14 28.133 110.02 27.009 110.019 25.621L110.007 14.556C110.006 13.166 111.127 12.038 112.51 12.038ZM100.433 18.187L102.814 18.746C104.326 19.119 105.414 19.664 106.076 20.38C106.739 21.097 107.071 22.073 107.071 23.309C107.071 24.781 106.515 25.939 105.404 26.783C104.293 27.627 102.758 28.049 100.798 28.049C98.797 28.049 97.094 27.751 95.687 27.156C94.747 26.759 94.274 25.698 94.617 24.732C94.989 23.686 96.152 23.209 97.176 23.628C97.432 23.732 97.696 23.827 97.969 23.913C98.939 24.217 99.892 24.369 100.825 24.369C101.404 24.369 101.852 24.28 102.17 24.104C102.487 23.927 102.646 23.682 102.646 23.368C102.646 23.094 102.529 22.872 102.296 22.706C102.062 22.539 101.619 22.387 100.965 22.249L98.669 21.69C97.213 21.376 96.163 20.881 95.518 20.203C94.874 19.527 94.552 18.589 94.552 17.392C94.552 16.431 94.823 15.577 95.364 14.831C95.906 14.086 96.657 13.503 97.619 13.08C98.58 12.658 99.686 12.447 100.937 12.447C101.964 12.447 102.972 12.604 103.962 12.918C104.37 13.047 104.766 13.199 105.152 13.371C106.066 13.781 106.51 14.833 106.152 15.773C105.779 16.754 104.668 17.256 103.709 16.839C103.506 16.751 103.3 16.671 103.094 16.598C102.31 16.323 101.572 16.185 100.882 16.185C100.321 16.185 99.882 16.279 99.565 16.465C99.248 16.652 99.089 16.921 99.089 17.274C99.089 17.491 99.182 17.662 99.369 17.79C99.555 17.918 99.91 18.05 100.433 18.187ZM89.021 27.092C87.854 27.73 86.487 28.049 84.919 28.049C83.331 28.049 81.95 27.735 80.774 27.106C79.598 26.478 78.692 25.576 78.057 24.398C77.422 23.221 77.105 21.837 77.105 20.248C77.105 18.658 77.422 17.274 78.057 16.097C78.692 14.92 79.598 14.018 80.774 13.389C81.95 12.761 83.331 12.447 84.919 12.447C86.487 12.447 87.854 12.767 89.021 13.404C90.188 14.042 91.089 14.945 91.724 16.112C92.358 17.28 92.676 18.658 92.676 20.248C92.676 21.837 92.358 23.216 91.724 24.384C91.089 25.551 90.188 26.454 89.021 27.092ZM86.977 17.378C86.519 16.759 85.833 16.45 84.919 16.45C83.985 16.45 83.285 16.759 82.818 17.378C82.351 17.996 82.118 18.952 82.118 20.248C82.118 21.563 82.351 22.529 82.818 23.148C83.285 23.765 83.985 24.074 84.919 24.074C86.748 24.074 87.663 22.799 87.663 20.248C87.663 18.952 87.434 17.996 86.977 17.378ZM70.58 28.343C69.721 30.364 68.72 31.722 67.345 32.773C66.572 33.364 65.577 33.974 64.516 34.437C63.239 34.993 61.771 34.264 61.447 32.904C61.201 31.868 61.725 30.819 62.677 30.351C63.353 30.019 63.94 29.644 64.307 29.403C64.96 28.971 65.455 28.372 65.791 27.607L66.155 26.783L61.327 15.246C60.69 13.725 61.802 12.043 63.443 12.043C64.377 12.043 65.217 12.611 65.57 13.48L68.815 21.484L71.464 13.605C71.777 12.672 72.648 12.043 73.629 12.043C75.242 12.043 76.347 13.677 75.754 15.184L70.58 28.343ZM56.995 28.133C55.891 28.133 54.995 27.232 54.995 26.123V26.122C54.189 26.576 53.108 27.043 52.286 27.445C51.463 27.847 50.529 28.133 49.55 28.133C48.277 28.133 47.173 27.735 46.174 27.106C45.175 26.478 44.396 25.581 43.838 24.413C43.28 23.245 43 21.896 43 20.365C43 18.815 43.284 17.442 43.853 16.244C44.42 15.047 45.204 14.115 46.203 13.448C47.202 12.781 48.328 12.447 49.582 12.447C50.562 12.447 51.458 12.658 52.271 13.08C53.083 13.503 54.544 14.354 54.995 15.06V14.049C54.995 12.941 55.889 12.043 56.991 12.043C58.092 12.043 58.986 12.94 58.987 14.048L58.996 26.121C58.996 27.232 58.101 28.133 56.995 28.133ZM53.402 17.466C52.892 16.809 51.53 16.249 50.59 16.249C49.669 16.249 48.521 16.394 47.992 17.071C47.463 17.748 46.991 18.852 46.991 20.088C46.991 21.285 47.482 22.467 47.992 23.105C48.501 23.742 50.033 24.111 50.993 24.111C51.934 24.111 52.892 23.751 53.402 23.103C53.911 22.455 54.166 21.523 54.166 20.306C54.166 19.07 53.911 18.124 53.402 17.466ZM0 0H40V40H0V0ZM5 35H35V5H5V35ZM28.283 29.997C26.78 29.997 26 28.404 26 27V17.999L24 20C24.04 19.127 23.631 18.644 23 17.999L21 16L26.277 10.969C27.035 10.195 28.223 9.936 29.269 10.316C30.314 10.696 31.003 11.637 31.003 12.687V27.453C31.003 28.857 29.785 29.997 28.283 29.997ZM22 22.999C20.892 23.949 19.015 24.035 18 22.999L14 18.999V27C14 28.404 13.22 29.997 11.717 29.997C10.215 29.997 8.997 28.857 8.997 27.453V12.545C8.997 11.496 9.685 10.555 10.731 10.174C11.777 9.794 12.965 10.052 13.723 10.827L22 18.999C23.015 20.035 23.108 22.05 22 22.999Z" fill="white" /></svg>
                        </div>
                        <p className='text-base text-white font-normal lg:mt-10 mt-6 w-full'>
                        If you want to sell your items such as any digital services then Mayosis is for you
                        </p>
                        <div className='flex flex-col gap-3 mt-20'>
                            <h2 className='text-3xl text-white font-semibold'>1833562</h2>
                            <p className='text-base text-white font-normal'>Total Downloads & Counting</p>
                        </div>
                        
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>
                            Company
                        </h3>
                        <div className="flex flex-col gap-2 lg:mt-10 mt-6">
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>About Us</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>About Us</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>About Us</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>About Us</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>About Us</a>


                        </div>


                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>
                            Products
                        </h3>
                        <div className="flex flex-col gap-2 lg:mt-10 mt-6">
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Graphics (26)</a>



                        </div>


                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>
                            Others
                        </h3>
                        <div className="flex flex-col gap-2 lg:mt-10 mt-6">
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Blog</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Blog</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Blog</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Blog</a>
                            <a href="" className='text-base text-white font-normal hover:text-opacity-50'>Blog</a>

                        </div>


                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>
                            Subscribe
                        </h3>
                        <div className="lg:mt-10 mt-6">

                            <form>
                                <div className="relative">

                                    <input type="search" id="default-search" className="block w-full p-4 text-sm text-white border-2 border-white rounded-sm bg-transparent placeholder:text-white placeholder:text-opacity-50 placeholder:text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Address" required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 448 512" fill="#000000"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                                </div>
                            </form>


                        </div>
                        <div className="flex flex-row gap-2 mt-20">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40"><path d="m0 0h780v500h-780z" fill="#fff" stroke="#000" stroke-width="15"/><path d="m168.38 169.35c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.215l-21.264 133.48c-.221 1.311.107 2.51.981 3.6.869 1.092 1.962 1.635 3.271 1.635h24.864c4.361 0 6.758-2.068 7.198-6.215l5.888-35.986c.215-1.744.982-3.162 2.291-4.254 1.308-1.09 2.944-1.803 4.907-2.129 1.963-.324 3.814-.488 5.562-.488 1.743 0 3.814.111 6.217.328 2.397.217 3.925.324 4.58.324 18.756 0 33.478-5.285 44.167-15.867 10.684-10.576 16.032-25.242 16.032-44.004 0-12.868-4.203-22.191-12.598-27.974zm-26.989 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.599-19.629 3.599l-10.797.326 5.563-35.007c.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.801 3.924 15.869z" fill="#003087"/><path d="m720.79 160.68h-24.207c-2.406 0-3.822 1.2-4.254 3.601l-21.266 136.1-.328.654c0 1.096.436 2.127 1.311 3.109.867.98 1.963 1.471 3.27 1.471h21.596c4.137 0 6.428-2.068 6.871-6.215l21.264-133.81v-.325c-.001-3.055-1.423-4.581-4.257-4.581z" fill="#009cde"/><path d="m428.31 213.36c0-1.088-.438-2.126-1.305-3.105-.875-.981-1.857-1.475-2.945-1.475h-25.191c-2.404 0-4.367 1.096-5.891 3.271l-34.678 51.039-14.395-49.074c-1.096-3.487-3.492-5.236-7.197-5.236h-24.541c-1.093 0-2.074.492-2.941 1.475-.875.979-1.309 2.019-1.309 3.105 0 .439 2.127 6.871 6.379 19.303 4.252 12.436 8.832 25.85 13.74 40.246 4.908 14.393 7.469 22.031 7.688 22.896-17.886 24.432-26.825 37.518-26.825 39.26 0 2.838 1.415 4.254 4.253 4.254h25.191c2.398 0 4.36-1.088 5.89-3.27l83.427-120.4c.433-.432.65-1.192.65-2.29z" fill="#003087"/><path d="m662.89 208.78h-24.865c-3.057 0-4.904 3.6-5.559 10.799-5.678-8.722-16.031-13.089-31.084-13.089-15.703 0-29.064 5.89-40.076 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.762 23.121 11.285 30.752 7.525 7.639 17.611 11.451 30.266 11.451 6.324 0 12.758-1.311 19.301-3.926 6.543-2.617 11.664-6.105 15.379-10.469 0 .219-.223 1.197-.654 2.941-.441 1.748-.656 3.061-.656 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.139 0 6.541-2.068 7.193-6.215l13.416-85.39c.215-1.31-.111-2.507-.982-3.599-.877-1.088-1.965-1.635-3.273-1.635zm-42.694 64.454c-5.562 5.453-12.27 8.178-20.121 8.178-6.328 0-11.449-1.742-15.377-5.234-3.928-3.482-5.891-8.281-5.891-14.395 0-8.064 2.727-14.886 8.182-20.447 5.445-5.562 12.213-8.342 20.283-8.342 6.102 0 11.174 1.799 15.213 5.396 4.031 3.6 6.055 8.562 6.055 14.889-.002 7.851-2.783 14.505-8.344 19.955z" fill="#009cde"/><path d="m291.23 208.78h-24.865c-3.058 0-4.908 3.6-5.563 10.799-5.889-8.722-16.25-13.089-31.081-13.089-15.704 0-29.065 5.89-40.078 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-.875 2.615-1.309 4.906-1.309 6.867 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.215l13.413-85.39c.215-1.31-.111-2.507-.981-3.599-.873-1.088-1.962-1.635-3.269-1.635zm-42.695 64.616c-5.563 5.35-12.382 8.016-20.447 8.016-6.329 0-11.4-1.742-15.214-5.234-3.819-3.482-5.726-8.281-5.726-14.395 0-8.064 2.725-14.886 8.18-20.447 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.397 4.032 3.6 6.052 8.562 6.052 14.889-.001 8.07-2.781 14.779-8.343 20.117z" fill="#003087"/><path d="m540.04 169.35c-8.398-5.774-19.355-8.668-32.879-8.668h-52.02c-4.363 0-6.764 2.073-7.197 6.215l-21.266 133.48c-.221 1.311.107 2.51.982 3.6.865 1.092 1.961 1.635 3.27 1.635h26.826c2.617 0 4.361-1.416 5.236-4.252l5.889-37.949c.217-1.744.98-3.162 2.291-4.254 1.309-1.09 2.943-1.803 4.908-2.129 1.961-.324 3.812-.488 5.561-.488 1.744 0 3.814.111 6.215.328 2.398.217 3.93.324 4.58.324 18.76 0 33.479-5.285 44.168-15.867 10.688-10.576 16.031-25.242 16.031-44.004.001-12.868-4.2-22.192-12.595-27.974zm-33.533 53.819c-4.799 3.271-11.998 4.906-21.592 4.906l-10.471.328 5.562-35.008c.432-2.396 1.85-3.598 4.252-3.598h5.887c4.799 0 8.615.219 11.455.654 2.83.438 5.561 1.799 8.178 4.088 2.619 2.291 3.926 5.619 3.926 9.979 0 9.164-2.402 15.377-7.197 18.651z" fill="#009cde"/></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40"><path d="m0 0h780v500h-780z" fill="#fff" stroke="#000" stroke-width="15"/><path d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001" fill="#0e4595"/><path d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528" fill="#f2ae14"/></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40"><path d="m0 0h780v500h-780z" fill="#fff" stroke="#000" stroke-width="15"/><path d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5" fill="#d9222a"/><path d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5" fill="#ee9f2d"/><path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"/><path d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z" fill="#fff"/><path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"/><path d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z" fill="#fff"/></svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40"><path d="m0 0h780v500h-780z" fill="#fff" stroke="#000" stroke-width="15"/><path d="m409.41 197.26c30.938 0 56.02 23.58 56.02 52.709v.033c0 29.129-25.082 52.742-56.02 52.742-30.941 0-56.022-23.613-56.022-52.742v-.033c0-29.129 25.081-52.709 56.022-52.709z" fill="#f47216"/><path d="m321.43 197.94c8.836 0 16.247 1.785 25.27 6.09v22.753c-8.544-7.863-15.955-11.154-25.757-11.154-19.265 0-34.413 15.015-34.413 34.051 0 20.074 14.681 34.195 35.368 34.195 9.312 0 16.586-3.12 24.802-10.856v22.764c-9.343 4.142-16.912 5.775-25.757 5.775-31.277 0-55.581-22.597-55.581-51.736-.002-28.83 24.949-51.882 56.068-51.882zm-97.113.626c11.546 0 22.109 3.721 30.942 10.994l-10.748 13.248c-5.351-5.646-10.411-8.027-16.563-8.027-8.854 0-15.301 4.744-15.301 10.988 0 5.354 3.618 8.188 15.944 12.481 23.364 8.043 30.289 15.176 30.289 30.926 0 19.193-14.976 32.554-36.319 32.554-15.631 0-26.993-5.795-36.457-18.871l13.268-12.03c4.73 8.608 12.622 13.223 22.42 13.223 9.163 0 15.947-5.95 15.947-13.983 0-4.164-2.056-7.733-6.158-10.258-2.066-1.195-6.158-2.978-14.199-5.646-19.292-6.538-25.91-13.527-25.91-27.186-.001-16.227 14.213-28.413 32.845-28.413zm234.72 1.729h22.436l28.084 66.592 28.447-66.592h22.267l-45.493 101.69h-11.054zm-301.21.152h20.541v99.143h-20.541zm411.73 0h58.253v16.799h-37.726v22.006h36.336v16.791h-36.336v26.762h37.726v16.785h-58.253zm115.59 57.377c15.471-2.965 23.983-12.926 23.983-28.105 0-18.562-13.575-29.271-37.266-29.271h-30.454v99.144h20.516v-39.83h2.681l28.43 39.828h25.26zm-17.218-11.736h-6.002v-30.025h6.326c12.791 0 19.744 5.049 19.744 14.697.002 9.967-6.951 15.328-20.068 15.328zm-576.09-45.641h-30.149v99.143h29.992c15.946 0 27.465-3.543 37.573-11.445 12.014-9.359 19.117-23.467 19.117-38.057.001-29.259-23.221-49.641-56.533-49.641zm23.997 74.479c-6.454 5.484-14.837 7.879-28.108 7.879h-5.514v-65.559h5.513c13.271 0 21.323 2.238 28.108 8.018 7.104 5.956 11.377 15.184 11.377 24.682.001 9.513-4.273 19.024-11.376 24.98z"/></svg>
                            </div>

                        </div>


                    </div>

                </div>
                <hr className='mt-20' />
                <div className='lg:flex lg:justify-between grid grid-cols-1 gap-6 lg:gap-0 mt-10'>
                 <p className='text-base text-white font-normal'>© Copyright 2022 <a href="#" className='text-base text-white font-normal hover:text-opacity-50'>Mayosis</a>&nbsp;I All Rights Reserved</p>
                 <div className="flex flex-row gap-10">
                    <a href="https://facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='white' width={16} height={16}><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
                    <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white' width={16} height={16}><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>
                    <a href="https://www.pinterest.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='white' width={16} height={16}><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                    </a>
                 </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
