"use client"
import { useState } from 'react'

import { DeleteIcon } from '@/modules/shared';
import { ICategory, deleteCategory } from '@/modules/categories';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';


interface Props {
    category: ICategory;
}


export const DeleteCategoryModal = ({ category }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    const handleSubmit = async () => {
        
        setIsLoading(true);

        await deleteCategory(category.id);
        
        onClose()
        setIsLoading(false);
    }



    return (
        <>
            <Button
                color='danger'
                isIconOnly
                variant='light'
                onPress={onOpen}
                startContent={<DeleteIcon className='text-red-500' />}
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Eliminar categoria</ModalHeader>
                            <ModalBody>
                                <p>¿Esta seguro de eliminar la categoria <span className='text-red-500'>{ category.name }</span>?</p>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button 
                                    isLoading={ isLoading }
                                    isDisabled={ isLoading }
                                    color="primary"
                                    onPress={handleSubmit}    
                                >
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
