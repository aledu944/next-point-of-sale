import { HeaderPage } from "@/modules/shared";
import { NewCategoryForm } from '@/modules/categories';

export default function () {
    return (
        <>
            <HeaderPage
                btnTitle='Volver'
                description='Crea una nueva categoria para tus productos'
                title='Nueva categoria'
                path='/admin/categories'
            />
            <NewCategoryForm/>
        </>
    );
}