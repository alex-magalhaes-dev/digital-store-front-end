import { twMerge } from "tailwind-merge"

export default function ProductListing({ products, className }) {

   const defaultClass = 'grid grid-cols-4 gap-x-6 gap-y-10'
   const mergedClass = twMerge(defaultClass, className)

   return (
      <div className={mergedClass}>
         {
            products.map(({ name, image, price, priceDiscount = '' }, index) => {
               return (
                  <div key={products[index]}>

                  </div>
               )
            })
         }
      </div>
   )
}