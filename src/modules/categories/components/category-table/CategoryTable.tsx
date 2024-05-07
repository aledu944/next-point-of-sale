"use client"
import Image from 'next/image'
import { ICategory } from '../../interface/category'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { EditCategoryModal } from './EditCategoryModal'

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
                                    <Image
                                        src={ category.image }
                                        width={ 50 }
                                        height={ 50 }
                                        priority={ false }
                                        alt={ category.name}
                                    />

                                </TableCell>
                                <TableCell>{ category.id }</TableCell>
                                <TableCell>{ category.name }</TableCell>
                                <TableCell>{ JSON.stringify(category.createdAt) }</TableCell>
                                <TableCell>
                                    {/* ACTIONS */}
                                    <EditCategoryModal category={ category }/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}