import React from 'react'
import { User as IUser} from '@prisma/client';

import { NavbarSearch } from './NavbarSearch';
import { NavbarButton } from './NavbarButton';
import { User } from '@nextui-org/react';

interface Props {
    user: IUser;
}

export const Navbar = ({ user }: Props) => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <NavbarButton />

                <NavbarSearch />

                <User
                    name={ user.name }
                    description={ user.email }
                    avatarProps={{
                        src: user.image!,
                        alt: user.name!
                    }}
                />
            </div>
        </nav>
    )
}
