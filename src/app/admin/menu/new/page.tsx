import { HeaderPage } from "@/modules/shared";
import { NewProuductForm } from "@/modules/products";
import { getAllCategories } from "@/modules/categories";

export default async function() {

    const categories = await getAllCategories()

    return (
        <>
            <HeaderPage
                btnTitle="Volver"
                description="Agrega un nuevo producto al menu"
                path="/admin/menu"
                title="Nuevo Producto"
            />

            <NewProuductForm
                categories={ categories ?? [] }
            />
        </>
    );
}