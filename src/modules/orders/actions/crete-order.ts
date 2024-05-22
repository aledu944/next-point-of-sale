"use server"

import { prisma } from "@/lib"
import { ICart } from "../../cart"
import { revalidatePath } from "next/cache"
import { permanentRedirect, redirect } from "next/navigation"


export const createOrder = async (cart: ICart[], total: number) => {

    cart.map(({ product, quantity }) => {
        if( quantity > product.stock ) {
            return {
                error: true,
                message: "Stock isuficiente"
            }
        }
    })


    const orderItems = cart.map(({ product, quantity }) => {
        return {
            price: product.price,
            productId: product.id,
            quantity
        }
    });

    const order = {
        status: false,
        total
    }



    try {
        await prisma.order.create({
            data: {
                ...order,
                OrderItem: {
                    createMany: {
                        data: orderItems
                    }
                }
            }
        })

        cart.map( async ({ product, quantity }) => {
            await prisma.product.update({
                where: {
                    id: product.id,
                },

                data: {
                    stock: product.stock - quantity
                }
            })
        })

        revalidatePath('/admin/home')

        return {
            error: false,
            message: "Orden generada"
        }

    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: "Error al generar la orden"
        }
    }
}