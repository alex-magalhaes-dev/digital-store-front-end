import ContainerGrid from "./ContainerGrid"
import LinkSection from "./LinkSection"

export default function Section({ children, titleText = 'Section title', titleAlign = 'left', link }) {
   return (
      <section className="pt-9 pb-16">
         <ContainerGrid className="flex flex-col gap-3 @laptop:gap-5">
            <div
               data-title-align={titleAlign}
               className="flex gap-8 justify-between items-center data-[title-align='center']:text-center data-[title-align='center']:justify-center"
            >
               <h2 className="text-brand-dark-gray-200 font-bold @laptop:text-2xl text-base">
                  {titleText}
               </h2>

               <div
                  data-title-align={titleAlign}
                  className="data-[title-align='center']:hidden"
               >
                  <LinkSection
                     text={link.text}
                     href={link.href}
                  />
               </div>
            </div>

            {children}
         </ContainerGrid>
      </section>
   )
}