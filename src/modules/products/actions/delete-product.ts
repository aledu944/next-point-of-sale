"use server"

import { prisma } from "@/lib"
import { revalidatePath } from "next/cache"


export const deleteProduct = async (id: number) => {
    try {
        await prisma.product.delete({
            where: {
                id
            }
        })

        revalidatePath('/admin/menu')
        return {
            ok: true,
            message: 'Se elimino el producto'
        }




    } catch (error) {
        throw new Error("Error al eliminar el producto")
    }
}