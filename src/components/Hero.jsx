import React from 'react'
import DownloadButton from "./buttons/DownloadButton";


function Hero() {
    return (
        <div>
            <section id='home' className="flex flex-col md:grid md:grid-cols-2 gap-5 items-center justify-center justify-items-center bg-gradient-to-br from-[var(--first-color)] via-[var(--second-color)] to-[var(--third-color)] text-white">
                <div className="">
                    <p className='text-[var(--thirteen-color)] font-thin text-2xl'>Hi,</p>
                    <h1 className="text-5xl font-bold mb-4 text-[var(--thirteen-color)]">I'm Siddharth Gope</h1>
                    <p className="text-xl text-[var(--sixth-color)]">A passionate Frontend Developer dedicated to building user-friendly, responsive, and visually appealing websites.</p>
                    <div className="flex">
                        <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-br from-[var(--tenth-color)] via-[var(--first-color)] to-[var(--tenth-color)] text-[var(--thirteen-color)] transition hover:scale-[1.02] duration-300 shadow-xl text-bold mr-3"><a href="#contact" >Contact Me</a></button>
                        <DownloadButton />
                    </div>
                </div>
                <div className="">
                    <div className="hero-image-bg-2 ">
                        <div className="hero-image-bg ">
                            <img src="src/assets/transparent-rounded-img.png" alt="siddharth gope" className='hero-img' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero