"use client"
import React from 'react'
import { Button } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';


interface Props {
    option: {
        name: string;
        path: string;
        icon: React.ReactNode;
    }
}

export const SideMenuItem = ({ option }: Props) => {

    const router = useRouter();
    const pathnamme = usePathname();


    const handleNavigate = () => {
        router.push(option.path)
    }

    return (
        <Button
            as='li'
            size='lg'
            variant='light'
            color='primary'
            onClick={handleNavigate}
            startContent={ option.icon }
            className={ pathnamme.includes(option.path) ? 'sidemenu__item--active' : 'sidemenu__item'}
        >  
            { option.name }
        </Button>
    )
}
