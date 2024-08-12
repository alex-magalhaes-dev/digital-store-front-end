import { Link } from 'react-router-dom'
import LogoLightIcon from '../assets/logo-header.svg'
import LogoDarkIcon from '../assets/logo-footer.svg'

export default function Logo({ theme = 'light' }) {
   return (
      <Link 
      className='hover:opacity-85'
      to='/'
      >
         <img
            src={theme === 'light' ? LogoLightIcon : LogoDarkIcon}
            alt="Logo store"
            width={253}
            height={44}
         />
      </Link>
   )
}