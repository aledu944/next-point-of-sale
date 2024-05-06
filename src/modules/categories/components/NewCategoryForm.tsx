"use client"

import { FormEvent } from 'react'
import { Input, Button } from '@nextui-org/react';
import { createCategory } from '@/modules/categories';
import { useRouter } from 'next/navigation';

export const NewCategoryForm = () => {

    const router = useRouter();

    const handleSubmit = async (e: FormEvent ) => {
        e.preventDefault();

        const { categoryName, image } = e.target as HTMLFormElement;

        const formData = new FormData();
        formData.append('name', categoryName.value);
        formData.append('image', image.files[0]);

        await createCategory(formData);
        router.push('/admin/categories');

    }

    return (
        <section className='container pt-8'>
            <div className="bg-white px-6 pt-8 pb-12 border border-gray-300 rounded">

                <h2 className='text-2xl font-semibold mb-6'>Formulario</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <Input
                        variant='underlined'
                        name='categoryName'
                        label="Nombre"
                        placeholder='Agrega un nombre a la categoria'
                    />
                    <input type="file" name="image" />

                    <Button type='submit' color='primary'>Guardar categoria</Button>


                </form>
            </div>
        </section>
    )
}
