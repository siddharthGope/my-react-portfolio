import React from 'react'

function Hero() {
    return (
        <div>
            <section className="grid grid-cols-2 gap-5 items-center justify-center justify-items-center bg-gradient-to-br from-[var(--first-color)] via-[var(--second-color)] to-[var(--third-color)] text-white">
                <div className="">
                    <p className='text-[var(--thirteen-color)] font-thin text-2xl'>Hi,</p>
                    <h1 className="text-5xl font-bold mb-4 text-[var(--thirteen-color)]">I'm Siddharth Gope</h1>
                    <p className="text-xl text-[var(--fifth-color)]">A passionate Frontend React.js Developer dedicated to building user-friendly, responsive, and visually appealing websites.</p>
                    <button className="mt-6 px-6 py-2 text-white rounded-full bg-gradient-to-br from-[var(--eleventh-color)] via-[var(--twelfth-color)] to-[var(--thirteen-color)] transition hover:scale-[1.02] duration-300"><a href="#contact" >Contact Me</a></button>
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