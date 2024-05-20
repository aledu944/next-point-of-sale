"use client"
import Image from 'next/image'

import { ICategory } from '../../interface/category'

import { DeleteCategoryModal, EditCategoryModal } from '@/modules/categories'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'

interface Props {
    categories: ICategory[]
}

export const CategoryTable = ({ categories }: Props) => {
    return (
        <section className='container pt-8'>

            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>CODIGO</TableColumn>
                    <TableColumn>IMAGEN</TableColumn>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>FECHA DE CREACION:</TableColumn>
                    <TableColumn>ACCIONES:</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        categories.map((category) => (

                            <TableRow key={category.id}>
                                <TableCell>
                                    <div className='h-[60px] w-[60px] object-cover object-center rounded-full overflow-hidden'>

                                        <Image
                                            src={category.image}
                                            width={100}
                                            height={100}
                                            priority={false}
                                            alt={category.name}
                                        />

                                    </div>
                                </TableCell>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{JSON.stringify(category.createdAt)}</TableCell>
                                <TableCell>
                                    {/* ACTIONS */}
                                    <EditCategoryModal category={category} />
                                    <DeleteCategoryModal category={category} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}
