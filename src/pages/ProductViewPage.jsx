import { useParams } from "react-router-dom"
import Gallery from "../components/Gallery"
import ContainerGrid from "../components/ContainerGrid"
import useFetchProducts from "../hooks/useFetchProducts"
import Section from "../components/Section"
import ProductsViewRelate from "../components/ProductsViewRelate"
import Breadcrump from "../components/Breadcrump"
import BuyBox from "../components/BuyBox"

export default function ProductViewPage() {

   const { id } = useParams()

   const { products } = useFetchProducts({ quantity: 1, id })
   const product = products[0] || {}

   const { branding, category, name } = product

   return (
      <main>
         <header className="pb-9 pt-5">
            <ContainerGrid className="flex flex-col gap-10">
               <Breadcrump
                  branding={branding}
                  category={category}
                  name={name}
               />
               <div className="flex gap-10">
                  <Gallery
                     product={product}
                     showThumbs={true}
                  />

                  <BuyBox
                     product={product}
                  />
               </div>
            </ContainerGrid>
         </header>

         <Section
            titleText="Produtos Relacionados"
            link={{ text: 'Ver todos', href: '/produtos' }}
         >
            <ProductsViewRelate />
         </Section>
      </main>
   )
}