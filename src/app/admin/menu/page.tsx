import { HeaderPage } from "@/modules/shared";

export default function() {
    return (
        <>
            <HeaderPage
                btnTitle='Agregar producto'
                description='Listado de tu menu actual con tus productos'
                title='Menu virtual'
                path='/admin/menu/new'
            />
        </>
    );
}