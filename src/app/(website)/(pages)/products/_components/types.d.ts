import { Product } from "../../categories/[slug]/_components/products/types";

export type ProductResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
}