import { Link } from "react-router-dom"

export default function FooterContacts() {
   return (
      <div className="flex flex-col items-start max-w-[14rem]">
         <span className="mb-7 text-lg font-semibold">
            Contatos
         </span>

         <div className="flex flex-col gap-4 items-start">
            <address className="not-italic">
               <Link
                  className="hover:opacity-85"
                  to="#"
                  target="_blank"
               >
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
               </Link>
            </address>

            <Link
               className="hover:opacity-85"
               to='#'
               target="_blank"
            >
               (85) 3051-3411
            </Link>
         </div>
      </div>
   )
}