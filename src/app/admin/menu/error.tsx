'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error.message);
    }, [error]);

    return (
        <section className='pt-8 h-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>{error.message}</h1>
            <button
                onClick={() => reset()}
            >
                Try again
            </button>
        </section>
    );
}