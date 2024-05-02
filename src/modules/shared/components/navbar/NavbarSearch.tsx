import React from 'react'
import { Input } from '@nextui-org/react'
import { SearchIcon } from '@/modules/shared'



export const NavbarSearch = () => {
    return (
        <Input
            startContent={ <SearchIcon color='#0a0a0a'/> }
            placeholder='Busca un producto'
            className='max-w-sm'
        />
    )
}
