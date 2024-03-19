// import { useState } from 'react';
// import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="Home">
            <main className="dark:bg-[#212121]">
                <div className="flex flex-wrap gap-10 items-center justify-between  px-6 py-32 md:px-14">
                    <div className=" w-full HomeText font-['FoundersGrotesk'] relative overflow-hidden md:w-1/2">
                        <h1 className="font-light text-[4rem] leading-[0.7] tracking-tight dark:text-[#F1F1F1]">
                            Hi , I&apos;m Ahmed Elsayed A Front-End Web Developer
                        </h1>
                        <p className="InfoText mt-8 relative text-[24px] font-light bg-gradient-to-l from-[#004D43] to-[#CDEA68] bg-clip-text text-transparent">
                            Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences.
                        </p>
                    </div>
                    <div className="Loader mx-auto">
                        <div className="loader dark:stroke-white">
                            <svg viewBox="0 0 80 80">
                                <circle r="32" cy="40" cx="40" id="test"></circle>
                            </svg>
                        </div>

                        <div className="loader triangle">
                            <svg viewBox="0 0 86 80">
                                <polygon points="43 8 79 72 7 72"></polygon>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect height="64" width="64" y="8" x="8"></rect>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="scrolldown">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>

                <div className="w-full bg-slate-300 h-[0.5px] mt-16 "></div>
                <div className="flex flex-wrap gap-5 items-center justify-center px-4 py-5 md:px-14 md:justify-between">
                    <p className=" text-[16px] text-center dark:text-[#F1F1F1]">For public and private companies</p>
                    <p className=" text-[16px] text-center dark:text-[#F1F1F1]">From the first pitch to IPO</p>
                    <Link to="/Contact">
                        <button className="Button relative text-[16px]  rounded-full py-1 px-10 text-gray-500 border border-gray-500 duration-1000 dark:bg-[#F1F1F1] dark:text-[#212121]">Contact Me</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Home