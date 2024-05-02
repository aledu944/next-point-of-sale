import React from 'react'
import { NavbarSearch } from './NavbarSearch';
import { NavbarButton } from './NavbarButton';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <NavbarButton/>

                <NavbarSearch/>
            </div>
        </nav>
    )
}
