import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center font-lora text-lg p-5 z-10 absolute w-full unselectable'>

            <h1 className='m-0 font-normal text-2xl'>Muhammad Ibrahim</h1>

            <ul className="flex items-center gap-6 list-none m-0 p-0 text-lg">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar