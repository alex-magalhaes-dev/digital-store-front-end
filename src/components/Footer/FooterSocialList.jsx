import { Link } from "react-router-dom"

//assets
import Social1 from '../../assets/icons/facebook.svg'
import Social2 from '../../assets/icons/instagram.svg'
import Social3 from '../../assets/icons/twitter.svg'

const socialList = [
   {
      icon: Social1,
      href: '#'
   }, {
      icon: Social2,
      href: '#'
   }, {
      icon: Social3,
      href: '#'
   },
]

export default function FooterSocialList() {
   return (
      <div className="flex gap-9">
         {
            socialList.map(({ icon, href }, index) => {
               return (
                  <Link
                     key={index}
                     className="w-5 h-5 hover:opacity-85"
                     to={href}
                     target="_blank"
                  >
                     <img
                        src={icon}
                        alt={href}
                     />
                  </Link>
               )
            })
         }
      </div>
   )
}