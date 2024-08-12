import { NavLink } from "react-router-dom"

const linksPages = [
   {
      text: 'Home',
      href: '/',
   }, {
      text: 'Produtos',
      href: '/produtos',
   }, {
      text: 'Categorias',
      href: '/categorias',
   }, {
      text: 'Meus Pedidos',
      href: '/meus-pedidos',
   }
]

export default function HeaderBar() {

   return (
      <div className="flex gap-8 text-base ">
         {
            linksPages.map(({ text, href }, index) => {
               return (
                  <NavLink
                     key={index}
                     to={href}
                     className={({ isActive }) =>
                        isActive ? 'font-bold border-b-[3px] border-brand-primary text-brand-primary rounded-sm' : 'hover:opacity-85'
                     }
                  >
                     {text}
                  </NavLink>
               )
            })
         }
      </div>
   )
}