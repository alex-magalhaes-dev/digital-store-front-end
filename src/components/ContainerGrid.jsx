import React from 'react';
import { twMerge } from 'tailwind-merge';

function ContainerGrid({ children, className = "" }) {

   const defaultClass = 'max-w-grid mx-auto px-4'
   const combinedClass = twMerge(defaultClass, className);

   return (
      <div className={combinedClass}>
         {children}
      </div>
   );
}

export default ContainerGrid;
