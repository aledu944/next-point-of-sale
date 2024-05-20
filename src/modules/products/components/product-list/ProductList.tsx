"use client"
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

import { LoadingView } from '@/modules/shared';
import { IProduct, getProductsByCategory, ProductCard } from '@/modules/products';


export const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    const searchCategory = useSearchParams().get('category');

    const getProducts = async () => {
        setIsLoading(true);
        const productsResponse = await getProductsByCategory(searchCategory);
        setProducts(productsResponse as IProduct[]);
        setIsLoading(false); 
    }

    useEffect(() => {
        getProducts();
    }, [searchCategory])
    
    if( isLoading ){
        return <LoadingView/>
    }

    return (
        <section className='container pt-8'>
            <ul className='grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                {
                    products.map((product) => (
                        <li key={ product.id }>
                            <ProductCard
                                product={ product }
                            />
                        </li>
                    ))
                }
            </ul>

        </section>
    )
}
