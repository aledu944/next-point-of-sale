"use client"


import { useUiStore } from '@/modules/shared';
import { SideMenuList } from './SideMenuList';
import { CloseMenuButton } from './CloseMenuButton';
import { CloseSessionButton } from './CloseSessionButton';

export const SideMenu = () => {

    const { isMenuOpen } = useUiStore()

    return (
        <nav className={isMenuOpen ? 'sidemenu sidemenu-show' : 'sidemenu'}>
            <div className='pt-8 mb-6'>
                <h3 className='font-bold text-2xl'>Next <span className='text-primary'>POS</span></h3>
            </div>

            <SideMenuList />


            <CloseMenuButton />

            <CloseSessionButton/>
        </nav>
    )
}
