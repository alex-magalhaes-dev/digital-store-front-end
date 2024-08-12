import { twMerge } from "tailwind-merge"
import ProductCard from "./ProductCard"
export default function ProductListing({ products, className }) {

   const defaultClass = 'grid grid-cols-4 gap-x-6 gap-y-10'
   const mergedClass = twMerge(defaultClass, className)

   return (
      <div className={mergedClass}>
         {
            products.map(({ category, name, image, price, priceDiscount = '', offer }, index) => {
               return (
                  <ProductCard
                     key={products[index]}
                     id={index}
                     image={image}
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