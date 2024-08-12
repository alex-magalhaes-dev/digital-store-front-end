import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/seach-icon.svg';

export default function HeaderSearchBar() {
   const searchRef = useRef(null);
   const navigate = useNavigate();
   const [query, setQuery] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const searchQuery = searchRef.current.value.trim();

      if (searchQuery) {
         setQuery(searchQuery);
         navigate(`/produtos?filter=${encodeURIComponent(searchQuery)}`);
         searchRef.current.value = ''
      }
   };

   return (
      <form onSubmit={handleSubmit} className="relative flex items-center max-w-[34.875rem] w-full">
         <input
            ref={searchRef}
            className='bg-gray-100 py-4 px-6 rounded-lg  placeholder:text-brand-dark-gray-300 placeholder:opacity-60 w-full'
            type="search"
            placeholder='Pesquisar produto...'
         />
         <button className='w-10 h-10 flex items-center justify-center z-10 absolute right-2'>
            <img
               src={SearchIcon}
               alt="Search button"
               width={24}
               height={24}
            />
         </button>
      </form>
   );
}
