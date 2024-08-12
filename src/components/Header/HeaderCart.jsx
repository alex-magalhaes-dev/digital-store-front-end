import { useState } from 'react'
import CartIcon from '../../assets/icons/mini-cart.svg'

export default function HeaderCart() {
   const [itens, setItens] = useState([])

   return (
      <button className='relative w-9 h-9'>
         <img
            src={CartIcon}
            alt="Cart button"
            width={24}
            height={24}
         />
         <div className='flex items-center justify-center w-[1.0625rem] h-[1.0625rem] text-xs/none font-bold text-brand-white bg-brand-error rounded-full absolute top-0 right-0'>
            {itens.length}
         </div>
      </button>
   )
}