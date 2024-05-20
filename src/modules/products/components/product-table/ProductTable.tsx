"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import { PencilEditIcon, ViewIcon } from '@/modules/shared';
import { DeleteProductModal, IProduct } from '@/modules/products'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Button } from '@nextui-org/react';


interface Props {
    products: IProduct[]
}

export const ProductTable = ({ products }: Props) => {
    
    const router = useRouter();

    const handleNavigate = (url: string) => {
        router.push(url)
    }
    
    return (
        <section className='container pt-8'>

            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>IMAGEN</TableColumn>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>CATEGORIA</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                    <TableColumn>PRECIO</TableColumn>
                    <TableColumn>FECHA DE CREACION:</TableColumn>
                    <TableColumn>ACCIONES:</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        products.map((product) => (

                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                                        <Image
                                            fill
                                            src={product.image}
                                            priority={false}
                                            alt={product.name}
                                            className='object-cover object-center'
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.category.name}</TableCell>
                                <TableCell>{product.stock} u.</TableCell>
                                <TableCell>{product.price} $</TableCell>
                                <TableCell>{JSON.stringify(product.createdAt)}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleNavigate(`/admin/menu/${ product.slug }`) } isIconOnly color='primary' variant='light' startContent={ <ViewIcon color='primary'/> } />      
                                    <Button isIconOnly color='primary' variant='light' startContent={ <PencilEditIcon color='primary'/> } />      
                                    <DeleteProductModal product={ product }/>       
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}
