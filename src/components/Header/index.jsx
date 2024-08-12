import ContainerGrid from "../ContainerGrid";
import HeaderBar from "./HeaderBar";
import Logo from "../Logo";
import HeaderSearchBar from "./HeaderSearchBar";
import Button from '../Button'
import LinkButton from "../LinkButton";
import HeaderCart from "./HeaderCart";

export default function Header() {
   return (
      <nav className="sticky top-0 w-full z-50 pt-9 pb-7 bg-brand-white">
         <ContainerGrid className="flex flex-col gap-10">
            <div className="flex justify-between gap-7 items-center">
               <Logo />

               <div className="w-full items-center flex gap-8 max-w-[59.75rem] justify-between">
                  <div className="w-full items-center flex gap-8 max-w-[53.375rem] justify-between">
                     <HeaderSearchBar />

                     <div className="flex items-center gap-8">
                        <LinkButton
                           text={'Cadastre-se'}
                           href='#'
                        />
                        <Button.Root>
                           Entrar
                        </Button.Root>
                     </div>

                  </div>

                  <HeaderCart />
               </div>

            </div>
            <HeaderBar />
         </ContainerGrid>
      </nav>
   )
}
