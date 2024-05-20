import { HeaderPage } from "@/modules/shared";
import { ProductTable, getAllProducts } from "@/modules/products";

export default async function() {

    const products = await getAllProducts();

    return (
        <>
            <HeaderPage
                btnTitle='Agregar producto'
                description='Listado y gestion de tus productos'
                title='Productos'
                path='/admin/menu/new'
            />

            <ProductTable
                products={ products }
            />
        </>
    );
}