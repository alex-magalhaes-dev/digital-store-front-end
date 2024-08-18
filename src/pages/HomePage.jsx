import Section from "../components/Section"
import CollectionList from "../components/CollectionList"
import CategoryList from "../components/CategoryList"
import SectionOffer from "../components/SectionOffer"
import HomeProducts from "../components/HomeProducts"
import HomeGallery from "../components/HomeGallery"

export default function HomePage() {
   return (
      <main>

         <HomeGallery />

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
            link={{ text: 'Ver todos', href: '/produtos' }}
         >
            <HomeProducts />
         </Section>

         <SectionOffer />
      </main>
   )
}