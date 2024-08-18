import ArrowIcon from '../assets/icons/select-arrow-icon.svg'

export default function SortResultSelector() {
   return (
      <form>
         <select className="rounded p-4 border border-brand-dark-gray-200 appearance-none">
            <option value="mais relevantes">Mais relevante</option>
         </select>
      </form>
   )
}