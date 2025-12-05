"use client";

import ProductCard from "@/app/(website)/_components/product-card";
import Pagination from "@/components/global/pagination";

import { Product } from "../../../categories/[slug]/_components/products/types";

// Props
type Props = {
  products: Product[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
};
export default function AllProductsContent({
  products,
  currentPage,
  pageSize,
  totalCount,
}: Props) {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      {/* Results count */}
      <div className="mb-4">
        <p className="text-secondary-700 text-sm">
          Showing <span className="font-medium">{products.length}</span> of{" "}
          <span className="font-medium">{totalCount}</span> products
        </p>
      </div>

      {/* Products grid */}
      <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            idx={idx}
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
