import CollectionTag from "./CollectionTag"
import Button from "../Button"

export default function CollectionCard({ tag = '30% OFF', title = 'Card title', href, image }) {
   return (
      <div className="overflow-hidden rounded-lg p-5 @laptop:py-9 @laptop:px-8 bg-brand-cyan-lighter relative">
         <div className="max-w-48 flex flex-col items-start relative z-10">
            <CollectionTag
               text={tag}
            />
            <h3 className="mt-2 @laptop:mt-3 mb-3 @laptop:mb-5 text-[2rem] font-bold text-brand-dark-gray-100">
               {title}
            </h3>
            <Button.Root
               type="secondary"
               size="large"
               href={href}
            >
               Comprar
            </Button.Root>
         </div>

         <img
            className="absolute z-0 bottom-0 right-0 max-h-[10rem]"
            src={image}
            alt="Product image"
            width='auto'
            height='auto'
         />
      </div>
   )
}