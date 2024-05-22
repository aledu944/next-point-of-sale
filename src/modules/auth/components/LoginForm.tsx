"use client"
import { useState } from 'react';
import { toast } from 'sonner';

import { Input, Button } from '@nextui-org/react';
import { loginWithCredentials } from '../actions/login-with-credentials';


export const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();

        setIsLoading(true);

        const {email, password} = e.target as HTMLFormElement;


        const { error, message } = await loginWithCredentials(email.value, password.value);

        if( error == true ){
            toast.error(message);
            setIsLoading(false);
            return;
        }

        toast.error(message);
        setIsLoading(false);
    }


    return (
        <form onSubmit={handleSubmit} className='login__form'>
            <Input
                type='email'
                name='email'
                label="Correo electrónico"
                size='sm'
                variant='underlined'
            />

            <Input
                type="password"
                name='password'
                label="Contraseña"
                size='sm'
                variant='underlined'
            />

            <Button
                type="submit"
                color='primary'
                fullWidth
                isLoading={isLoading}
                isDisabled={isLoading}
            >
                Iniciar Sesion
            
            </Button>
        </form>
    )
}
