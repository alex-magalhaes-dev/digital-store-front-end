export default function CategoryCard({ icon, title, highlight = false }) {
   return (
      <div className="flex flex-col gap-3 items-center">
         <div
            data-highlight={highlight}
            className="bg-brand-white flex items-center justify-center w-[6.5rem] h-[6.5rem] data-[highlight='true']:text-brand-primary data-[highlight='true']:shadow-smooth rounded-full"
         >
            <img
               className="@laptop:w-16 @laptop:h-16 h-14 w-14"
               src={icon}
               alt={title}
            />
         </div>

         <h3 className="font-bold text-sm">
            {title}
         </h3>
      </div>
   )
}