import ContainerGrid from "../ContainerGrid"
import Logo from "../Logo"
import FooterSocialList from "./FooterSocialList"
import FooterNavigation from "./FooterNavigation"
import FooterContacts from "./FooterContacts"

const infoLinks = [
   {
      text: 'Sobre Drip Store',
      href: '#'
   }, {
      text: 'Segurança',
      href: '#'
   }, {
      text: 'Wishlist',
      href: '#'
   }, {
      text: 'Blog',
      href: '#'
   }, {
      text: 'Trabalhe conosco',
      href: '#'
   }, {
      text: 'Meus Pedidos',
      href: '#'
   },
]

const categoriesLink = [
   {
      text: 'Camisetas',
      href: '#'
   }, {
      text: 'Calças',
      href: '#'
   }, {
      text: 'Bonés',
      href: '#'
   }, {
      text: 'Headphones',
      href: '#'
   }, {
      text: 'Tênis',
      href: '#'
   },
]

export default function Footer() {
   return (
      <footer className="bg-brand-dark-gray-100 text-brand-white">
         <ContainerGrid>
            <div className="flex justify-between pt-[4.5rem] pb-9 gap-16">
               <div className="max-w-[19.25rem] font-normal">
                  <Logo theme="dark" />
                  <p className="mt-10 mb-8">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <FooterSocialList />
               </div>

               <div className="flex gap-16 justify-between max-w-[45.75rem] w-full">
                  <div className="flex justify-between gap-16 max-w-[20.75rem] w-full">
                     <FooterNavigation
                        title="Informação"
                        information={infoLinks}
                     />

                     <FooterNavigation
                        title="Categorias"
                        information={categoriesLink}
                     />
                  </div>

                  <FooterContacts />
               </div>
            </div>

            <hr className="opacity-30" />

            <div className="py-6 flex justify-center text-xs">
               <span>
                  @2022 Digital College
               </span>
            </div>

         </ContainerGrid>
      </footer>
   )
}