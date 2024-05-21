"use server"

import { signIn } from "@/auth"


export const loginWithCredentials = async (email: string, password: string) => {
    
    if( email.trim() === '' || password.trim() === '' ) {
        return {
            error: true,
            message: "Todos los campos son obligatorios"
        }
    }

    
    await signIn("credentials", { email, password })


}