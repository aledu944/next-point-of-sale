"use server"
import { v2 as cloudinary } from 'cloudinary';

import { prisma } from '@/lib';
import { createSlug } from '@/helpers';

cloudinary.config( process.env.CLOUDINARY_URL ?? '' );


export const createCategory = async (formData: FormData) => {

    try {
    
        const image = formData.get('image');
        const imageUrl = await uploadImage(image as File);
        
        const slug = createSlug(formData.get('name') as string);
        
        const category = {
            name: formData.get('name') as string,
            image: imageUrl!,
            slug
        }; 
    
        await prisma.category.create({
            data: category
        });

        return {
            isError: false,
            message: "Se guardo la categoria",
        }
        
    } catch (error) {

        console.log(error);
        
        return {
            isError: true,
            message: "No se pudo guardar la categoria",
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