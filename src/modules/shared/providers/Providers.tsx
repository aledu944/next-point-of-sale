"use client"
import React from 'react'
import { Toaster } from 'sonner';
import { NextUIProvider } from '@nextui-org/react';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    return (
        <>
            <Toaster
                position='top-center'
                richColors
                closeButton
                style={{ position: 'absolute' }}
            />
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </>
    )
}
