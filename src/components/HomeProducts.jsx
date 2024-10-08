import ProductListing from "./ProductListing";
import useFetchProducts from "../hooks/useFetchProducts";

export default function HomeProducts() {

   const {products} = useFetchProducts({ quantity: 8 })

   return (
      <ProductListing
         products={products}
      />
   )
}