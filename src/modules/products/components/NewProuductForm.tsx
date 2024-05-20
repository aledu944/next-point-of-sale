"use client"
import { useState } from 'react';

import { ICategory } from '@/modules/categories';
import { createProduct } from '@/modules/products';

import { Input, Button, Textarea, Select, SelectItem } from '@nextui-org/react';

interface Props {
    categories: ICategory[]
}

export const NewProuductForm = ({ categories }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { productName, image, description, price, stock, categoryId } = e.target as HTMLFormElement;

        const formData = new FormData();
        formData.append('name', productName.value);
        formData.append('description', description.value);
        formData.append('price', price.value);
        formData.append('stock', stock.value);
        formData.append('categoryId', categoryId.value);
        formData.append('image', image.files[0]);


        await createProduct(formData);
        setIsLoading(false);

    }

    return (
        <section className='container pt-8'>
            <div className="bg-white px-6 pt-8 pb-12 border border-gray-300 rounded">

                <h2 className='text-2xl font-semibold mb-6'>Formulario</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <Input
                        variant='underlined'
                        name='productName'
                        label="Nombre"
                        placeholder='Agrega un nombre a la categoria'
                    />

                    <Textarea
                        variant='underlined'
                        name='description'
                        label="Descripcion"
                        placeholder='Agrega los detalles del producto'
                    />

                    <Input
                        variant='underlined'
                        name='price'
                        type='number'
                        step='0.01'
                        min={0}
                        label="Precio"
                        placeholder='Agrega un nombre a la categoria'
                    />

                    <Input
                        variant='underlined'
                        name='stock'
                        type='number'
                        min={0}
                        label="Stock disponible"
                        placeholder='Agrega un nombre a la categoria'
                    />


                    <div>
                        <input type="file" name="image" />
                    </div>

                    <Select
                        label="Categorias"
                        placeholder="Selecciona una categoria"
                        name='categoryId'
                        variant='underlined'
                    >
                        {
                            categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                    { category.name }
                                </SelectItem>
                            ))
                        }
                    </Select>

                    <Button
                        type='submit'
                        color='primary'
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Guardar categoria
                    </Button>


                </form>
            </div>
        </section>
    )
}
