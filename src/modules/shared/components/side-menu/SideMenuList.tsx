"use client"
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";
import { HomeIcon, InvoiceIcon, LayersIcon, MenuSquareIcon, UsersIcon } from "@/modules/shared";

export const SideMenuList = () => {
    
    const router = useRouter();
    const pathnamme = usePathname();


    const handleNavigate = (url: string) => {
        router.push(url)
    }

    return (
        <ul className="flex flex-col gap-4">
            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                startContent={<HomeIcon/>}
                onClick={() => handleNavigate('/admin/home')}
                className={pathnamme.includes('/home') ? 'sidemenu__item--active' : 'sidemenu__item'}
            >
                Inicio
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                startContent={<MenuSquareIcon/>}
                onClick={() => handleNavigate('/admin/menu')}
                className={pathnamme.includes('/menu') ? 'sidemenu__item--active' : 'sidemenu__item'}
            >
                Menu
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                startContent={<LayersIcon/>}
                onClick={() => handleNavigate('/admin/categories')}
                className={pathnamme.includes('/categories') ? 'sidemenu__item--active' : 'sidemenu__item'}
            >
                Categorias
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                startContent={<InvoiceIcon/>}
                onClick={() => handleNavigate('/admin/orders')}
                className={pathnamme.includes('/orders') ? 'sidemenu__item--active' : 'sidemenu__item'}
            >
                Ordenes
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                startContent={<UsersIcon/>}
                onClick={() => handleNavigate('/admin/users')}
                className={pathnamme.includes('/users') ? 'sidemenu__item--active' : 'sidemenu__item'}
            >
                Usuarios
            </Button>
        </ul>
    )
}
