"use client"
import { FormEvent, useState } from 'react';

import { PencilEditIcon } from '@/modules/shared';
import { ICategory, updateCategory } from '@/modules/categories';

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'


interface Props {
    category: ICategory;
}

export const EditCategoryModal = ({ category }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { categoryName, image } = e.target as HTMLFormElement;

        const formData = new FormData();


        formData.append('id', `${category.id}`);
        formData.append('name', categoryName.value);
        formData.append('image', image.files[0]);
        await updateCategory(formData);

        setIsLoading(false);


    }

    return (
        <>
            <Button
                color='primary'
                isIconOnly
                variant='light'
                onPress={onOpen}
                startContent={<PencilEditIcon className='text-primary' />}
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Editar categoria</ModalHeader>
                            <ModalBody>

                                <Input
                                    name='categoryName'
                                    placeholder='Actualiza el nombre'
                                    variant='underlined'
                                    defaultValue={category.name}
                                />

                                <input type="file" name="image" />


                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button color="primary" type="submit">
                                    Actualizar
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
