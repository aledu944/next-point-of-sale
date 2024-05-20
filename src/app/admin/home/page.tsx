
import { HeaderPage } from "@/modules/shared";
import { ProductList } from "@/modules/products";
import { CategorySelector, getAllCategories } from "@/modules/categories";

export default async function () {

    const categories = await getAllCategories();
    
    return (
        <>
            <HeaderPage
                btnTitle='Agregar producto'
                description='Gestiona el menu de tu restaurante'
                title='Menu virtual'
                path='/admin/menu/new'
            />

            <CategorySelector
                categories={ categories ?? [] }
            />

            <ProductList />

        </>
    );
}

export const revalidate = 0 // revalidate at most every hour
