//assets
import StarIcon from '../assets/icons/star-tag.svg'
import Button from './Button'

export default function RateTag({ rate, quantity }) {
   return (
      <div className='flex items-center gap-2'>
         <div className="px-3 flex gap-1 items-center py-1 h-6 rounded text-sm font-black bg-brand-warning text-brand-white">
            <span>
               {rate}
            </span>
            <img
               src={StarIcon}
               alt="Rate product"
               width={10}
               height={10}
            />
         </div>

         <span className='text-brand-light-gray-100 text-sm font-medium'>
            ({quantity} avaliações )
         </span>
      </div>
   )
}