"use client"

import { useCartStore } from "@/modules/cart"
import { Badge, Button } from '@nextui-org/react';
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";


export const NavCartButton = () => {
    const { handleCartOpen, cart } = useCartStore();

    return (

        <Badge content={ cart.length == 0 ? null : cart.length } style={{ fontSize: '10px' }} color="primary">

            <Button
                radius="full"
                variant="light"
                isIconOnly
                onClick={handleCartOpen}
                startContent={<ShoppingCartIcon />}
            />
        </Badge>
    )
}
