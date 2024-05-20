'use client'
import { useState } from 'react'

import { DeleteIcon } from '@/modules/shared'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { IProduct, deleteProduct } from '@/modules/products';

interface Props {
    product: IProduct;
}

export const DeleteProductModal = ({ product }: Props) => {

    const [isLoading, setIsLoading] = useState(false)
    
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();



    const handleDelete = async () => {
        setIsLoading(true);

        const { message, ok } = await deleteProduct(product.id);

        if( !ok ){
            
            return;
        }

        

        setIsLoading(false);
        onClose();

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
                                <p>¿Esta seguro de eliminar el producto <span className='text-red-500'>{product.name}</span>?</p>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    color="primary"
                                    onPress={handleDelete}
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
