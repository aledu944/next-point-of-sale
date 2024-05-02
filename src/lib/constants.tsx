import { HomeIcon, InvoiceIcon, MenuSquareIcon, UsersIcon } from "@/modules/shared";

export const sideMenuOptions = [
    {
        name: 'Home Page',
        path: '/',
        icon: <HomeIcon/>,
    },
    {
        name: 'Menu',
        path: '/menu',
        icon: <MenuSquareIcon/>,

    },
    {
        name: 'Ordenes',
        path: '/orders',
        icon: <InvoiceIcon/>,
    },
    {
        name: 'Usuarios',
        path: '/users',
        icon: <UsersIcon/>,
    },
]