'use client';
import { Navbar } from 'flowbite-react'
import React from 'react'

const NavbarComponent = () => {
    return (
        <Navbar className='bg-blue-100'
            fluid
            rounded
        >
            <Navbar.Brand>
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="https://flowbite.com/docs/images/logo.svg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavbarComponent