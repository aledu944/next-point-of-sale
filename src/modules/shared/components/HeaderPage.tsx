"use client"
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    title: string;
    description: string;

    path: string;
    btnTitle: string;
}

export const HeaderPage = ({ btnTitle, description, path, title }: Props) => {
    
    const router = useRouter();

    const handleNavigate = () => {
        router.push(path)
    }
    
    return (
        <section className="header">
            <div>
                <h1 className="text-4xl font-bold mb-2">{ title }</h1>
                <p className="text-gray-500">{ description }</p>
            </div>
            <Button onClick={handleNavigate} color='primary'>{ btnTitle }</Button>
        </section>
    )
}
