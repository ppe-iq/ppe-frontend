import ProductCard from "@/app/(website)/_components/product-card";
import Pagination from "@/components/global/pagination";

import { ProductType } from "../types";
import { Product } from "./types";

type Props = {
  products: Product[];
  productTypes: ProductType[];
  currentPage: number;
  totalCount: number;
};
export default function CategoryProductsContent({
  products,
  currentPage,
  totalCount,
}: Props) {
  // Calculate total pages (assuming 10 items per page from Django)
  const pageSize = 10;
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      {/* Results count */}
      <p className="text-secondary-700 text-sm">
        Showing <span className="font-medium">{products.length}</span> of{" "}
        <span className="font-medium">{totalCount}</span> products
      </p>

      {/* Products Grid */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            idx={idx + 1.5}
            isLazy={true}
            className="bg-secondary-400"
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
