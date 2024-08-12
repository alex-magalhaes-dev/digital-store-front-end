import { Link } from "react-router-dom"


export default function FooterNavigation({ title, information }) {
   return (
      <div className="flex flex-col items-start">
         <span className="mb-7 text-lg font-semibold">
            {title}
         </span>
         <div className="flex flex-col gap-4 items-start">
            {
               information.map(({ text, href }, index) => {
                  return (
                     <Link
                        key={text}
                        className="hover:underline"
                        to={href}
                     >
                        {text}
                     </Link>
                  )
               })
            }
         </div>
      </div>
   )
}