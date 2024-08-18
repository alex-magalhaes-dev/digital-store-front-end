import ContainerGrid from "../components/ContainerGrid"
import SearchCount from "../components/SearchCount"
import SortResultSelector from "../components/SortResultSelector"
import ProductListing from "../components/ProductListing"
import FilterList from "../components/FilterList"
import { useSearchParams } from "react-router-dom"
import useFetchProducts from "../hooks/useFetchProducts"

export default function ProductListingPage() {

   const [searchParams] = useSearchParams();
   const filter = searchParams.get('filter');


   const { products: productsList } = useFetchProducts({ quantity: 15 })

   let products = productsList

   if (filter) {
      products = productsList.filter(({ name }) => name.includes(filter));
   }

   return (
      <main>
         <section>
            <ContainerGrid className="flex flex-col gap-10 pt-10 pb-36">
               <div className="flex justify-between items-center">
                  <SearchCount
                     quantity={products.length}
                     query={filter}
                  />
                  <SortResultSelector />
               </div>

               <div className="flex gap-7 items-start">
                  <FilterList />

                  <ProductListing
                     className="grid-cols-3"
                     products={products}
                  />
               </div>
            </ContainerGrid>
         </section>
      </main>
   )
}