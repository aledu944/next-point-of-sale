import { prisma } from "@/lib";
import { ICategory } from "../interface/category";

export const getAllCategories = async (): Promise<ICategory[] | undefined> => {
    try {
        
        const categories = await prisma.category.findMany();
        
        return categories


    } catch (error) {
        throw error;
    }
} 