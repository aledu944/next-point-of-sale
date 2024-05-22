"use client"
import React, { useState } from 'react'

import { Button } from '@nextui-org/react'

import { CartList } from './CartList';
import { CancelIcon } from '@/modules/shared';
import { useCartStore } from '@/modules/cart';
import { toast } from 'sonner';
import { createOrder } from '@/modules/orders';

export const SideCart = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { handleCartOpen, isCartOpen, total, cart, cleanCart } = useCartStore();

    const handleNewOrder = async () => {
        setIsLoading(true);

        if (cart.length === 0) {
            toast.warning('No hay elementos en el carrito')
            return;
        }

        const { error, message } = await createOrder(cart, total);

        if (error) {
            toast.error(message);
            return;
        }

        toast.success(message);

        cleanCart();

        setIsLoading(false);
    }


    return (
        <div className={isCartOpen ? 'side__cart side__cart--show' : 'side__cart'}>

            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold'>Carrito</h3>

                <Button
                    variant='light'
                    isIconOnly={true}
                    onClick={handleCartOpen}
                    radius='full'
                    startContent={<CancelIcon />}
                />
            </div>

            <CartList />
            <div className="flex-1"></div>

            <p className='flex justify-between'>
                <span className='text-lg font-bold text-gray-500'>
                    Total:
                </span>
                <span className='text-primary font-bold'>{total}$</span>
            </p>

            <Button
                fullWidth
                color='primary'
                onClick={handleNewOrder}
                isLoading={isLoading}
                isDisabled={isLoading}
            >
                Generar orden
            </Button>

        </div>
    )
}
