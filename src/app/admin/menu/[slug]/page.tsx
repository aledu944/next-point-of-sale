import { prisma } from "@/lib";
import { getAllProducts } from "@/modules/products";

interface Params {
    params: {
        slug: string
    }
}


export default function ({ params }: Params) {


    return (
        <div>
            <h1>{ params.slug }</h1>
        </div>
    );
}

export const revalidate = 3600

export async function generateStaticParams() {
    const products = await getAllProducts();

    return products.map((product) => ({
        slug: product.slug,
    }));
}