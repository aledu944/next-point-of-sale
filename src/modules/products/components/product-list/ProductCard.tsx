import React from 'react'
import { Card, CardBody, Button } from '@nextui-org/react';
import { IProduct } from '@/modules/products'
import Image from 'next/image'

interface Props {
    product: IProduct
}

export const ProductCard = ({ product }: Props) => {

    return (
        <Card isPressable shadow='sm' className='md:max-h-[275px] border-none rounded-[12px]' fullWidth>
            <div
                className='text-center grid md:grid-cols-2 gap-4 p-[18px] '
            >
                <div className="rounded-[6px] md:max-h-[200px] h-full object-cover md:max-w-[200px] w-full overflow-hidden">
                    <Image
                        src={product.image}
                        className='w-full object-cover object-center h-full'
                        height={200}
                        width={200}
                        alt={product.name}
                    />
                </div>

                <div className='text-start flex flex-col justify-between'>
                    <div className='space-y-2 text-gray-600 mb-2'>
                        <h3 className='text-xl font-bold text-black'>
                            {product.name}
                        </h3>
                        <p className='line-clamp-2'>{product.description}</p>
                        <p>
                            <span className='font-bold text-black'>Stock:</span> {product.stock}u.
                        </p>
                        <p>
                            <span className='font-bold text-black'>Precio:</span> {product.price}$
                        </p>
                    </div>
                    <Button as={'div'} color='primary'>Agregar al carrito</Button>
                </div>
            </div>
        </Card>
    )
}
