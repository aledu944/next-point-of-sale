"use client"
import { useRouter, useSearchParams } from 'next/navigation';

import { ICategory } from '@/modules/categories';

import { Button } from '@nextui-org/react';


interface Props {
    categories: ICategory[]
}

export const CategorySelector = ({ categories }: Props) => {

    const router = useRouter();
    const searchCategory = useSearchParams().get('category');

    return (
        <section className='pt-8 container'>
            <ul className='flex gap-4'>
                <Button
                    onClick={() => router.push(`/admin/home`)}
                    variant={ !searchCategory ? 'solid' : 'ghost' }
                    as='li'
                    color='primary'
                >
                    Todos
                </Button>

                {
                    categories.map(category => (
                        <Button
                            key={ category.id }
                            onClick={() => router.push(`/admin/home?category=${category.slug}`)}
                            variant={ searchCategory === category.slug ? 'solid' : 'ghost' }
                            as='li'
                            color='primary'
                        >
                            {category.name}
                        </Button>
                    ))
                }
            </ul>

        </section>
    )
}
