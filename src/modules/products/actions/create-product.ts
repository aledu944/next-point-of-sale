"use server"
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';

import { prisma } from '@/lib';
import { createSlug } from '@/helpers';


cloudinary.config( process.env.CLOUDINARY_URL ?? '' );


export const createProduct = async (formData: FormData) => {

    const slug = createSlug(formData.get('name') as string);

    try {
        const image = formData.get('image');
        const imageUrl = await uploadImage(image as File);


        await prisma.product.create({
            data: {
                name: formData.get('name') as string,
                description: formData.get('description') as string,
                price: +formData.get('price')!,
                stock: +formData.get('stock')!,
                categoryId: +formData.get('categoryId')!,
                image: imageUrl!,
                slug ,               
            }
        })

        revalidatePath('/admin/menu');
        redirect('/admin/menu');

    } catch (error) {
        throw error;   
    }
}

export const uploadImage = async (image: File) => {
    try {

        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`)
            .then(r => r.secure_url);

    } catch (error) {

        console.log(error);
        return null;

    }
}