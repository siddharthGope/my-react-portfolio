import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-gray-600 text-2xl font-bold">Siddharth</h1>
                    <ul className="flex space-x-4">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-500">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar