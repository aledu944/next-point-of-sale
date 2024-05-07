"use server"
import { v2 as cloudinary } from 'cloudinary';

import { prisma } from '@/lib';
import { createSlug } from '@/helpers';
import { revalidatePath } from 'next/cache';

cloudinary.config( process.env.CLOUDINARY_URL ?? '' );


export const updateCategory = async (formData: FormData) => {

    const image = formData.get('image');
    const slug = createSlug(formData.get('name') as string);
        
    if( image === undefined ) {
        const imageUrl = await uploadImage(image as File);

        const category = {
            id: formData.get('id') as string,
            name: formData.get('name') as string,
            image: imageUrl,
            slug
        }; 

        try {
            await prisma.category.update({
                where: {
                    id: +category.id
                },
                data: {
                    image: category.image!,
                    name: category.name,
                    slug: category.slug,
                }
    
            });

            revalidatePath('/admin/categories')
    
            return {
                isError: false,
                message: "Se actualizo la categoria",
            }
            
        } catch (error) {
    
            console.log(error);
            
            return {
                isError: true,
                message: "No se pudo actualizar la categoria",
            }
    
        }
    }
    
    const category = {
        id: formData.get('id') as string,
        name: formData.get('name') as string,
        slug
    }; 

    try {    
        await prisma.category.update({
            where: {
                id: +category.id,
            },
            data: {
                name: category.name,
                slug: category.slug,
            }
        });

        revalidatePath('/admin/categories')

        return {
            isError: false,
            message: "Se actualizo la categoria",
        }
        
    } catch (error) {

        console.log(error);
        
        return {
            isError: true,
            message: "No se pudo actualizar la categoria",
        }

    }
}


export const uploadImage = async (image: File) => {
    try {
    
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader.upload(`data:image/png;base64,${ base64Image }`)
            .then( r => r.secure_url );

    } catch (error) {

        console.log(error);
        return null;

    }
}