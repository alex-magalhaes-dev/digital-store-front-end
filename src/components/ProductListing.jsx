import { twMerge } from "tailwind-merge"
import ProductCard from "./ProductCard"
export default function ProductListing({ products, className }) {

   const defaultClass = 'grid grid-cols-4 gap-x-6 gap-y-10'
   const mergedClass = twMerge(defaultClass, className)

   return (
      <div className={mergedClass}>
         {
            products.map(({ id, category, name, thumb, price, priceDiscount = '', offer }, index) => {
               return (
                  <ProductCard
                     key={index}
                     id={id}
                     thumb={thumb}
                     category={category}
                     name={name}
                     price={price}
                     priceDiscount={priceDiscount}
                     offer={offer}
                  />
               )
            })
         }
      </div>
   )
}