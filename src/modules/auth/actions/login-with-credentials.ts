"use server"
import { signIn } from "@/auth"
import { revalidatePath } from "next/cache"


export const loginWithCredentials = async (email: string, password: string) => {
    
    if( email.trim() === '' || password.trim() === '' ) {
        return {
            error: true,
            message: "Todos los campos son obligatorios"
        }
    }

    try {
        await signIn("credentials", { email, password })

        // revalidatePath('/')
        return {
            error: false,
            message: "Bienvenido al sistema"
        }

    } catch (error) {
        console.log(error)
        
        return {
            error: true,
            message: "Error al autenticarse"
        }
    }


}