"use client"
import React from 'react'

import { Button } from '@nextui-org/react'

import { CartList } from './CartList';
import { CancelIcon } from '@/modules/shared';
import { useCartStore } from '@/modules/cart';

export const SideCart = () => {

    const { handleCartOpen, isCartOpen, total } = useCartStore();

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
            >
                Generar orden
            </Button>

        </div>
    )
}
