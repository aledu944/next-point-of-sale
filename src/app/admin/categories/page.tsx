import { CategoryTable, getAllCategories } from '@/modules/categories';
import { HeaderPage } from '@/modules/shared';

export default async function CategoriesPage() {

    const categories = await  getAllCategories();

    return (
        <>
            <HeaderPage
                btnTitle='Agregar categoria'
                description='Gestiona y maneja tus categorias'
                title='Categorias'
                path='/admin/categories/new'
            />
            <CategoryTable
                categories={ categories! }
            />
        </>
    );
}