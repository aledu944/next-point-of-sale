import React from 'react'
import { sideMenuOptions } from '@/lib/constants';
import { SideMenuItem } from './SideMenuItem.';

export const SideMenu = () => {
    return (
        <nav className='sidemenu'>
            <div className='pt-8 mb-6'>
                <h3 className='font-bold text-2xl'>Next <span className='text-primary'>POS</span></h3>
            </div>

            <ul className='flex flex-col gap-4'>
                {
                    sideMenuOptions.map( option => (
                        <SideMenuItem key={option.path}
                            option={ option }
                        />
                    ))
                }
            </ul>



        </nav>
    )
}
