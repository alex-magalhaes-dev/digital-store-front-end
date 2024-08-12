import ContainerGrid from "../ContainerGrid";
import Button from "../Button";

//assets
import ProductImage from '../../assets/product-slide-image.png'
import PatternIcon from '../../assets/pattern-slide-icon.svg'

export default function MainSlide() {
   return (
      <div className="overflow-hidden bg-brand-light-gray-300 pt-16 pb-32">
         <ContainerGrid className="flex items-center">
            <div className="max-w-[29rem]">
               <span className="text-brand-yellow-default font-bold">
                  Melhores ofertas personalizadas
               </span>
               <h1 className="font-extrabold text-[4rem] leading-none my-5 text-brand-dark-gray-100">
                  Queima de stoque Nike 🔥
               </h1>
               <p className="text-lg mb-10">
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
               </p>
               <Button.Root
                  className="px-16"
                  size="large"
               >
                  Ver Ofertas
               </Button.Root>
            </div>

            <div className="relative">
               <img
                  src={ProductImage}
                  alt="Main product"
               />
               <img
                  className="absolute top-2 -right-36"
                  src={PatternIcon}
                  alt="Slide detail"
               />
            </div>
         </ContainerGrid>
      </div>
   )
}