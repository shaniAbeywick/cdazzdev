'use client'
import Image from 'next/image'
import React, { useState } from 'react';

function AboutUsEmployee() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [modal4Open, setModal4Open] = useState(false);
    const [modal5Open, setModal5Open] = useState(false);
    const [modal6Open, setModal6Open] = useState(false);

    const openModal1 = () => {
        setModal1Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal1 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal1Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal2 = () => {
        setModal2Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal2 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal2Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal3 = () => {
        setModal3Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal3 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal3Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal4 = () => {
        setModal4Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal4 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal4Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal5 = () => {
        setModal5Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal5 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal5Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal6 = () => {
        setModal6Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal6 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal6Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };


    return (
        <>
            <div className="bg-blue-100">
                <div className='lg:container py-20 p-10'>

                    <h3 className='text-2xl font-semibold text-white text-center'>Meet The Team</h3>
                    <p className='text-base font-normal text-white text-center mt-3'>Meet the team and know what they do and love!</p>
                </div>
            </div>
            <div className="bg-white">
                <div className='lg:container py-20 p-10'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-80 gap-y-10">

                        <div className="flex flex-col">
                            <button className="" onClick={openModal1}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>Job Title</h2>
                                </div>
                            </button>

                        </div>
                        {modal1Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal1}>

                                <div className="relative p-4 w-full max-w-6xl max-h-full" >

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Full Name</h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Job Title</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Degree</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsam veritatis dicta iste perspiciatis aliquid suscipit architecto dolorum. Dignissimos rerum cupiditate a earum accusamus dolores facere maxime est ducimus dolorem.</p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam possimus inventore sint quae mollitia, eius iste. Eos similique ab facilis, natus nostrum accusamus ea fuga quod fugiat doloremque vel iste!
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis, illum quo eum officiis ut nulla commodi soluta debitis beatae sapiente animi hic consequuntur minus vel quod ipsam nesciunt at!
                                                </p>
                                            </div>
                                            {/* <Image src="/images/user1.jpg" alt='empolyeeImg' className="rounded-lg" width={177} height={180} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <button className="" onClick={openModal2}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>Job title</h2>
                                    
                                </div>
                            </button>

                        </div>
                        {modal2Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal2}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Full Name</h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Job Title</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Degree</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam explicabo laudantium quam repellat deserunt nisi, incidunt molestias et quaerat quia, ea fuga provident sapiente aliquid earum voluptate voluptatem consequuntur maiores! </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita corporis tenetur obcaecati beatae ipsa quibusdam. Nam architecto culpa omnis eligendi, corrupti odio debitis alias dolores vel consequuntur, fugit doloremque laborum.

                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit ullam dolorum doloremque eligendi! Repellendus ratione officia quo magni neque. Molestias velit et vel sapiente enim magni placeat minus eligendi?

                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt impedit quos, ea voluptatum sequi, asperiores minus, dolores numquam officia dicta illo alias assumenda tenetur temporibus. Libero voluptatem nulla culpa fuga!
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum natus, eveniet quasi quo! Rerum eius repellendus ad. Aperiam alias ab minus. Deserunt facilis asperiores expedita reprehenderit, delectus tempore?

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal3}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>Job title</h2>
                                </div>
                            </button>
                        </div>
                        {modal3Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal3}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Chamal Wickramanayaka</h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>ENGINEERING MANAGERS/SOFTWARE ARCHITECT</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Msc in Data Science and AI -USJ, BIT - UCSC - 1st Class</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Chamal, a seasoned Software Engineer with an impressive 13-year track record, brings a wealth of expertise to the table. With a dedicated focus on data science and artificial intelligence for the past three years, Chamal is driven by an unwavering passion for technology and its boundless possibilities.</p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Possessing a Master's degree in Data Science and AI, Chamal has embarked on a journey that goes beyond conventional programming. This academic pursuit has not only honed his skills but has also allowed him to immerse himself in the intricacies of data-driven insights and intelligent solutions.
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Chamal's fascination extends to the potential of IoT and Electronics to revolutionize industries. His keen interest in these transformative technologies fuels a commitment to staying at the forefront of industry trends and advancements. Eager to contribute his expertise to this dynamic domain, Chamal is dedicated to exploring innovative approaches that can shape the future.

                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Collaboration is at the heart of Chamal's professional ethos. Working alongside like-minded professionals, he endeavors to create solutions that are not only innovative but also transformative. The prospect of connecting with others to collectively shape the future drives him forward, and his motto encapsulates this spirit: "Let's connect and explore how we can shape the future together."

                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>In Chamal, you find a seasoned professional whose combination of experience, academic prowess, and passion for cutting-edge technologies positions him as a valuable asset in the ever-evolving landscape of software engineering and data science.

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal4}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>Job Title</h2>
                                </div>
                            </button>
                        </div>
                        {modal4Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal4}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Full Name</h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Job title</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Degree</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias, repellendus neque, quia magnam soluta eum commodi nobis deleniti reprehenderit omnis unde nam tenetur culpa fugit reiciendis corporis quaerat delectus?</p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus sed aperiam, repellendus et vel ut maxime laborum iusto sequi ipsam aliquam non laboriosam ea autem ratione quos velit. Adipisci!
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus nemo ipsam praesentium ad consequuntur? Itaque repellendus debitis modi? Laborum iste quaerat fugit incidunt ab, quis asperiores illum dolores explicabo.
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eius! Eveniet facere odit autem officia omnis est in dignissimos dolorem quos! Dolor maiores nostrum harum veniam sit. Dolore, accusantium exercitationem.

                                                </p>

                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <button className="" onClick={openModal5}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4 uppercase'>Job title</h2>
                                </div>
                            </button>
                        </div>
                        {modal5Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal5}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Full Name</h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Job Title</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Degree</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio totam velit illum, atque deserunt exercitationem neque quo ad cupiditate nulla aliquid corporis, quos obcaecati eligendi fugiat animi voluptatem ratione.
                                                </p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi eligendi animi nihil in voluptate corporis voluptas doloribus repellendus molestiae commodi, aut quibusdam tempore. Ea perferendis atque tempore esse molestiae.

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal6}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/photo.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Full Name
                                    </h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4 uppercase'>Job title</h2>
                                </div>
                            </button>
                        </div>
                        {modal6Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal6}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-5xl text-4xl font-bold'>Full Name
                                                </h2>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Job Title</h3>
                                                <h3 className='text-white md:text-base text-base font-light italic mt-4'>Degree</h3>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, delectus facere esse exercitationem earum quisquam, officiis enim, blanditiis tempore quo suscipit voluptate temporibus fugiat. Eaque, quam? Quam reprehenderit corrupti labore!</p>
                                                <p className='text-white md:text-base text-sm font-normal mt-8 max-w-[100ch]'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eos corporis voluptates perferendis dicta molestias cum fugiat nam delectus veritatis, ducimus, fugit harum voluptatem maiores, eum at rem dolore enim.
                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>

    )
}

export default AboutUsEmployee
