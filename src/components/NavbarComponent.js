'use client';
import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const NavbarComponent = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-16"
                    src='logoGame.jpeg'
                />
                
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Inicio
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Categorias
                </Navbar.Link>
                <Navbar.Link href="#">
                    Promociones
                </Navbar.Link>
                <Navbar.Link href="#">
                    Noticias
                </Navbar.Link>
                <Navbar.Link href="#">
                    Soporte
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
