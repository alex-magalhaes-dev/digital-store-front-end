import ContainerGrid from "./ContainerGrid"
import Button from "./Button"

//assets
import ProductImage from "../assets/product-offer.png"
import BgGradient from "../assets/bg-gradient.png"

export default function SectionOffer() {
   return (
      <section className="py-24 overflow-hidden bg-brand-white">
         <ContainerGrid className="flex items-start gap-16">
            <div className="relative flex justify-center items-start mt-2">
               <img
               className="absolute -top-6 right-5 "
                  src={BgGradient}
                  alt="Bg gradient"
               />

               <img
                  className="relative z-10"
                  src={ProductImage}
                  alt="Product image"
               />
            </div>

            <div className="flex flex-col max-w-[35rem] tracking-wide items-start relative z-10">
               <span className="font-bold text-brand-primary text-sm">
                  Oferta especial
               </span>
               <h2 className="text-brand-dark-gray-100 font-bold text-5xl/tight mt-4 mb-5">
                  Air Jordan edição de colecionador
               </h2>
               <p className="text-base/normal mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               </p>
               <Button.Root
                  className="px-16"
               >
                  Ver Oferta
               </Button.Root>
            </div>
         </ContainerGrid>
      </section>
   )
}