import React from 'react';

export default function ColorPicker({ color, value = color, groupName = 'color-group' }) {
   const id = `color-${value}`;

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
            className={`cursor-pointer rounded-full peer-checked:outline-brand-primary inline-block w-10 h-10 peer-checked:outline peer-checked:outline-2 outline-offset-2`}
            style={{ backgroundColor: color }}
            aria-checked={value === color ? "true" : "false"}
            role="radio"
         >
         </label>
      </div>
   );
}
