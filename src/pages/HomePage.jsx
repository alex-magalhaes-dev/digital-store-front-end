import Section from "../components/Section"
import CollectionList from "../components/CollectionList"
import CategoryList from "../components/CategoryList"
import ProductListing from "../components/ProductListing"
import SectionOffer from "../components/SectionOffer"

export default function HomePage() {
   return (
      <main>
         <Section
            titleText="Coleções em destaque"
            link={{ text: '' }}
         >
            <CollectionList />
         </Section>

         <Section
            titleText="Coleções em destaque"
            titleAlign="center"
            link={{ text: '' }}
         >
            <CategoryList />
         </Section>

         <Section
            titleText="Produtos em alta"
            link={{ text: 'Ver todos', href: '#' }}
         >
            <ProductListing products={[]} />
         </Section>

         <SectionOffer />
      </main>
   )
}