export interface IProduct {
    id:          number;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
    price:       number;
    stock:       number;
    categoryId:  number;
    createdAt:   Date;
    updatedAt:   Date;
    category:    IProductCategory;
}

export interface IProductCategory {
    name: string;
    slug: string;
}
