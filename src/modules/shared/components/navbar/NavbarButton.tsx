'use client'


import { Button } from '@nextui-org/react'
import { MenuIcon } from '../icons/MenuIcon'
import { useUiStore } from '@/modules/shared'

export const NavbarButton = () => {
    const { handleMenuOpen } = useUiStore();

    return <Button
        variant='light'
        isIconOnly={true}
        onClick={ handleMenuOpen }
        radius='full'
        className='text-sm md:hidden'
        startContent={ <MenuIcon/> }
    />
}
