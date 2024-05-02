"use client"
import React from 'react'
import { NextUIProvider } from '@nextui-org/react';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    return (
        <>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </>
    )
}
