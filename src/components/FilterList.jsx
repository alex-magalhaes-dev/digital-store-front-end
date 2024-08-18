import CheckBox from "./CheckBox"
import RadioButton from "./RadioButton"

export default function FilterList() {
   return (
      <form className="bg-brand-white w-full p-8 flex flex-col gap-5 text-sm font-bold max-w-[19.25rem]">
         <h2 className="text-base">
            Filtrar por
         </h2>

         <hr />

         <div className="flex flex-col gap-2 items-start">
            <span>
               Marka
            </span>
            <CheckBox text="Adiddas" />
            <CheckBox text="Calenciaga" />
            <CheckBox text="K-Swiss" />
            <CheckBox text="Nike" />
            <CheckBox text="Puma" />
         </div>

         <div className="flex flex-col gap-2 items-start">
            <span>
               Categoria
            </span>
            <CheckBox text="Esporte e lazer" />
            <CheckBox text="Casual" />
            <CheckBox text="Utilitário" />
            <CheckBox text="Corrida" />
         </div>

         <div className="flex flex-col gap-2 items-start">
            <span>
               Gênero
            </span>
            <CheckBox text="Masculino" />
            <CheckBox text="Feminino" />
            <CheckBox text="Unisex" />
         </div>

         <div className="flex flex-col gap-2 items-start">
            <span>
            Estado
            </span>
            <RadioButton text="Novo" />
            <RadioButton text="Feminino" />
            <RadioButton text="Unisex" />
         </div>
      </form>
   )
}