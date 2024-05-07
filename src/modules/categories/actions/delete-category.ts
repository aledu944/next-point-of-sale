"use server"
import { prisma } from "@/lib"
import { revalidatePath } from "next/cache"



export const deleteCategory = async (id: number) => {
    try {
        
        const response = await prisma.category.delete({
            where: {
                id,
            }
        })

        console.log(response)

        revalidatePath('/admin/categories')
    } catch (error) {
        console.log(error);
        throw new Error('Error al eliminar la categoria')
    }
}