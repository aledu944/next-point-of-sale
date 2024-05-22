import Image from 'next/image';

import { useCartStore } from '@/modules/cart';

import { Button } from '@nextui-org/react';

export const CartList = () => {

    const cart = useCartStore(state => state.cart);
    const { incrementQuantity, decrementQuantity } = useCartStore();

    return (
        <ul className='flex flex-col gap-6 w-full h-full max-h-min overflow-y-auto'>
            {
                cart.map((item) => (
                    <li className='flex justify-between items-center gap-2' key={item.product.id}>

                        <div className='relative h-[70px] w-[80px] rounded-lg overflow-hidden'>
                            <Image
                                fill
                                src={item.product.image}
                                alt={item.product.name}
                                className='object-cover object-center'
                            />
                        </div>

                        <div className='w-full'>
                            <h5 className='font-semibold'>{item.product.name}</h5>
                            <p className='text-sm'>Precio: {item.product.price}$</p>

                            <div className='w-full mt-3 flex items-center justify-between'>
                                <Button
                                    onClick={() => decrementQuantity(item.product.id)}
                                    isIconOnly
                                    radius='full'
                                    variant='bordered'
                                    className='text-xl'
                                >-</Button>
                                {item.quantity}
                                <Button
                                    onClick={() => incrementQuantity(item.product.id)}
                                    isIconOnly
                                    radius='full'
                                    variant='bordered'
                                    className='text-xl'
                                >+</Button>
                            </div>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}
