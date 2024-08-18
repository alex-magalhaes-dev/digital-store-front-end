import ProductListing from "./ProductListing";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductsViewRelate() {

   const { products } = useFetchProducts({ quantity: 4 })

   return (
      <ProductListing
         products={products}
      />
   )
}