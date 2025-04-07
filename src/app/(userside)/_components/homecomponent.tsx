'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
export default function HomeComponent() {
    //Defining banner images array
    const bannerImages = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='container-fluid'>
                <div className='relative h-130'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {bannerImages.map((item, index) => (
                            <SwiperSlide key={`${item}-${index}`}>
                                <img src="/static/banner_image.jpg" alt="banner_image" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Centered overlay text */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div>
                            <p className="text-white text-4xl md:text-6xl font-bold text-center">
                                Read anytime, anywhere
                            </p>
                            <div className='flex justify-center'>
                                <p className='text-white text-3xl font-bold text-center mt-5 w-60'>Explore our collection of thounsands of online books and start reading today.</p>
                            </div>
                            <div className='text-center mt-5 '>
                                <button className='text-xl bg-green-700 px-4 py-2 rounded-2xl text-white font-bold'>Browse Books</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5">
                        Assemble your team of professionals
                    </p>
                    <p className="text-center mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        Our community is home to the best publishing talent on the planet.
                    </p>
                    <div className="container max-w-7xl mx-auto mt-6">
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10 mt-6">
                                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className="text-center border-2 rounded-xl p-5 w-full sm:w-auto"
                                    >
                                        <img
                                            src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/editing-39046b952255184ef38271727bbb665e3a7cd99a3caee617f77269388e812681.svg"
                                            alt="image"
                                            className="mx-auto w-20 md:w-24"
                                        />
                                        <p className="text-2xl md:text-3xl font-bold mt-2">2275</p>
                                        <p className="text-lg">Editors</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-6 flex flex-col lg:flex-row items-center justify-center">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere iste minima consectetur provident earum
                            excepturi quis consequatur nostrum quaerat similique, temporibus voluptatem, fugit recusandae laudantium, illo
                            repellendus porro ea unde nemo cumque. Totam amet alias at, esse delectus ipsa repellat dolor, inventore enim
                            explicabo culpa soluta voluptas earum aperiam commodi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit impedit nam expedita natus ex sapiente dolores quo neque labore?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda officiis aperiam consectetur eos porro pariatur velit suscipit necessitatibus odio eius, fuga qui nostrum est possimus inventore? Recusandae voluptatem pariatur possimus corporis odit id excepturi sed nobis molestiae, dolore ab autem eos libero facilis saepe nulla. Quaerat ducimus provident omnis quisquam odio explicabo itaque, saepe error ullam. At natus iure commodi suscipit? Fugiat, commodi? Quo porro minus dicta velit maxime omnis ratione, explicabo illum veritatis numquam fugit in fuga voluptates nulla odit autem officiis eius iure laudantium exercitationem consequuntur beatae magni officia blanditiis! Voluptatum impedit ipsam nemo error culpa. Sit.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full h-100 lg:w-1/2 p-4 flex items-center justify-center bg-gray-200">
                        <p>Image section</p>
                    </div>
                </div>


                <div className="mt-40 flex justify-center p-10" style={{ backgroundColor: "#faf9f7" }}>
                    <div className='container'>
                        <p className="text-4xl md:text-6xl font-bold text-center">
                            Assistance at any stage of your journey
                        </p>
                        <p className="text-center text-xl md:text-3xl mt-3">
                            Not sure where to start? A Reedsy Learning course is the perfect place to begin.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                            {[1, 2, 3].map((item, index) => (
                                <div key={`${item}-${index}`} className="w-full md:w-1/3">
                                    <Link
                                        href="#"
                                        className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                    >
                                        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-10 p-4">
                            <Link
                                href="#"
                                className="theme-bg px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-2xl block text-center w-full sm:w-auto text-white font-bold"
                            >
                                Browse free courses
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-3xl font-bold">Work with the industry’s top professionals</p>
                            <p className="text-2xl mt-2">Connect with handpicked professionals who have worked on bestselling books for top publishers.</p>
                        </div>

                        {/* Image/Empty Section */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center h-100">
                            <img src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/professionals-3094b5f384dc84267f6debfe9a1c437e773616d10b1570ab088eae8d57ac39e5.svg" alt="image" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Image/Empty Section */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center h-100">
                            <img src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/professionals-3094b5f384dc84267f6debfe9a1c437e773616d10b1570ab088eae8d57ac39e5.svg" alt="image" />
                        </div>
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-3xl font-bold">Work with the industry’s top professionals</p>
                            <p className="text-2xl mt-2">Connect with handpicked professionals who have worked on bestselling books for top publishers.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-3xl font-bold">Work with the industry’s top professionals</p>
                            <p className="text-2xl mt-2">Connect with handpicked professionals who have worked on bestselling books for top publishers.</p>
                        </div>
                        {/* Image/Empty Section */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center h-100">
                            <img src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/professionals-3094b5f384dc84267f6debfe9a1c437e773616d10b1570ab088eae8d57ac39e5.svg" alt="image" />
                        </div>
                    </div>
                </div>
                <div
                    className="mt-40 flex justify-center p-10 bg-[#faf9f7]"
                >
                    <div className="max-w-5xl w-full text-center">
                        <p className="text-4xl font-bold">Tools that make life simple</p>
                        <p className="text-2xl mt-2">Work smarter with these great collaborative features.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={`${item}-${index}`} className="p-5 text-center">
                                    <img
                                        src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/messaging-a7b34fd7df2eab012872744bcd9d96438712bc44dea4cfcf26eaccc5f6117f5d.svg"
                                        alt="image"
                                        className="mx-auto w-20 h-20 md:w-24 md:h-24"
                                    />
                                    <p className="font-bold text-lg md:text-xl mt-3">Messaging & File Sharing</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-10" style={{ background: "linear-gradient(135deg, #49846e, #7fb99a)" }}>
                    <div>
                        <p className='text-4xl font-bold text-center'>#MadeWithMyAiStory</p>
                        <p className='text-2xl text-center'>Some of the fantastic books that we have helped prepare for publishing.</p>
                    </div>
                </div>
            </div>
        </>
    )
}