import { HeaderPage } from '@/modules/shared';

export default function CategoriesPage() {
    return (
        <>
            <HeaderPage
                btnTitle='Agregar categoria'
                description='Gestiona y maneja tus categorias'
                title='Categorias'
                path='/admin/categories/new'
            />
        </>
    );
}