export type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string | null;
    created_at: string | Date;
}

export type ProductType = {
    id: number;
    name: string;
    slug: string;
    created_at: string | Date;
}

export type ProductTypeResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ProductType[];
}