import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col justify-between items-center md:grid md:grid-cols-2">
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--third-color)] via-[var(--tenth-color)] to-[var(--thirteen-color)] w-fit">Siddharth</h1>
                    <ul className="flex space-x-4">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-500">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar