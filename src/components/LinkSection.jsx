import ArrowIcon from '../assets/icons/long-arrow-right.svg'

export default function LinkSection({ text = 'Ver todos', href = '#' }) {
   return (
      <a
         data-visible={text}
         className="text-brand-primary flex gap-2 items-center @laptop:text-lg text-sm hover:opacity-85 font-medium data-[visible='']:hidden"
         href={href}
      >
         <span>
            {text}
         </span>

         <img
            src={ArrowIcon}
            alt="Icon button"
            width={24}
            height={24}
         />
      </a >
   )
}