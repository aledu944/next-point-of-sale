"use server"

import { prisma } from "@/lib"

export const getProductsByCategory = async (category: string | null) => {
    
    try {
        if( category ){
            const products = await prisma.product.findMany({
                where: {
                    category: {
                        slug: category
                    }
                }
            });
            return products;
        }
        
        const products = await prisma.product.findMany();
        return products;

    } catch (error) {
        throw new Error("Error al mostrar los productos");
    }


}