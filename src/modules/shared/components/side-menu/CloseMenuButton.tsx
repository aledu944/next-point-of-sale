import React from 'react'

import { Button } from '@nextui-org/react';

import { CancelIcon } from '../icons/CancelIcon';
import { useUiStore } from '../../stores/ui.store';

export const CloseMenuButton = () => {
    const { handleMenuOpen } = useUiStore();

    return <Button
        variant='light'
        isIconOnly={true}
        onClick={ handleMenuOpen }
        radius='full'
        className='text-sm md:hidden mt-8 mx-auto flex items-center'
        startContent={ <CancelIcon/> }
    />
}
