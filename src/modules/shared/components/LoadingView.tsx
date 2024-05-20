import React from 'react'
import { CircularProgress } from '@nextui-org/react';

export const LoadingView = () => {
    return (
        <section className='container flex flex-col h-full items-center justify-center'>
            <CircularProgress color='primary' size='md'/>
            <h3>Cargando contenido...</h3>
        </section>
    )
}
