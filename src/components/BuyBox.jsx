import Button from "./Button"
import ColorPicker from "./ColorPicker"
import InputSize from "./InputSize"
import RateStars from "./RateStars"
import RateTag from "./RateTag"

export default function BuyBox({ product }) {

   const {
      name,
      group,
      branding,
      ref,
      avaregeRate,
      countRates,
      description,
      price,
      priceDiscount,
      sizes = [],
      colors = []
   } = product || {}


   return (
      <form className="max-w-[27.5rem] w-full flex flex-col items-start text-sm">
         <h1 className="mb-3 font-bold text-[2rem] text-brand-dark-gray-100">
            {name}
         </h1>
         <div className="flex gap-2 text-brand-dark-gray-300 text-xs">
            <span>{group}</span>
            <span>|</span>
            <span>{branding}</span>
            <span>|</span>
            <span>REF: {ref}</span>
         </div>

         <div className="flex items-center gap-4 mt-3">
            <RateStars
               rate={avaregeRate}
            />
            <RateTag
               rate={avaregeRate}
               quantity={countRates}
            />
         </div>

         <div className="my-5 flex items-start gap-2">
            <span className="text-base">
               R$
            </span>
            <span className="font-bold text-[2rem]">
               {price}
            </span>
            <span className="text-brand-light-gray-200 text-base line-through">
               {priceDiscount}
            </span>
         </div>

         <div className="mb-8 flex flex-col gap-2">
            <span className="text-brand-light-gray-100 font-bold">
               Descrição
            </span>
            <p>
               {description}
            </p>
         </div>

         <div className="mb-8 flex flex-col gap-2">
            <span className=" text-brand-light-gray-100 font-bold">
               Tamanho
            </span>
            <div className="flex gap-3">

               {
                  sizes.map((size) => {
                     return (
                        <InputSize
                           key={size}
                           size={size}
                        />
                     )
                  })
               }
            </div>
         </div>

         <div className="mb-6 flex flex-col gap-2">
            <span className=" text-brand-light-gray-100 font-bold">
               Cor
            </span>
            <div className="flex gap-3">
               {
                  colors.map((color) => {
                     return (
                        <ColorPicker
                           key={color}
                           color={color}
                        />
                     )
                  })
               }
            </div>
         </div>

         <Button.Root
            className="px-16"
            size="large"
            type="shop"
         >
            COMPRAR
         </Button.Root>

      </form>
   )
}