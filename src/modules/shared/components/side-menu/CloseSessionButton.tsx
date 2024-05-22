import React from 'react'
import { closeSession } from '@/modules/auth'
import { Button } from '@nextui-org/react'

export const CloseSessionButton = () => {

    const handleClick = async () => {
        await closeSession();
    }


    return (
        <Button 
            fullWidth
            color='danger'
            variant='light'
            className='mt-auto'
            onClick={handleClick}
        >
            Sign Out
        </Button>
    )
}
