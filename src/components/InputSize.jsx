import React from 'react';

export default function InputSize({ size, value = size, groupName = 'size-group' }) {
   const id = `size-${value}`

   return (
      <div>
         <input
            id={id}
            className="peer hidden"
            name={groupName}
            value={value}
            type="radio"
         />
         <label
            htmlFor={id}
            className="w-12 h-12 rounded border text-base font-bold flex items-center justify-center cursor-pointer transition-colors peer-checked:bg-brand-primary peer-checked:border-opacity-0 border-brand-dark-gray-300 peer-checked:text-white"
         >
            <span>
               {size}
            </span>
         </label>
      </div>
   );
}
