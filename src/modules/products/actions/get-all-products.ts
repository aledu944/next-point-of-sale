"use server"

import { prisma } from "@/lib"

export const getAllProducts = async () => {
    try {
        
        const products = await prisma.product.findMany({
            include: {
                category: {
                    select: {
                        name: true,
                        slug: true
                    }
                },
            }
        });
        return products;
    } catch (error) {
        throw new Error('Error al obtener los productos')
    }
}