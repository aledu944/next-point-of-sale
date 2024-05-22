import React from 'react'
import { User as IUser } from '@prisma/client';

import { NavbarSearch } from './NavbarSearch';
import { NavbarButton } from './NavbarButton';
import { User } from '@nextui-org/react';
import { NavCartButton } from './NavCartButton';

interface Props {
    user: IUser;
}

export const Navbar = ({ user }: Props) => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <NavbarButton />

                <NavbarSearch />
                <div className='flex items-center gap-4'>
                    <User
                        name={user.name}
                        description={user.email}
                        avatarProps={{
                            src: user.image!,
                            alt: user.name!
                        }}
                    />

                    <NavCartButton />
                </div>
            </div>
        </nav>
    )
}
