import React, { useState, useTransition } from 'react';
import LInk from '../LInk/LInk';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);


    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 3, name: 'Product', path: '/Product' },
        { id: 4, name: 'Orders', path: '/Orders' },
        { id: 2, name: 'Contact', path: '/Contact' },
        { id: 5, name: 'About', path: '/About' }
    ]
    return (
        <nav className='bg-purple-300 w-full'> 
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <ul className={`bg-purple-300 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-4' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <LInk
                        key={route.id}
                        route={route}
                    ></LInk>)}
            </ul>
        </nav>

    );
};

export default Navbar;