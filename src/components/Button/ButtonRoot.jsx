import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const ButtonVariants = tv({
   base: 'text-sm font-bold tracking-wide flex items-center gap-2 rounded-lg px-9 text-center justify-center',
   variants: {
      size: {
         medium: 'h-10',
         large: 'h-12'
      },
      type: {
         primary: 'text-brand-light-gray-300 bg-brand-primary hover:bg-brand-tertiary disabled:bg-brand-light-gray-200',
         secondary: 'text-brand-primary bg-brand-light-gray-300 hover:bg-brand-secondary hover:text-brand-light-gray-300 disabled:opacity-50 disabled:text-brand-primary disabled:border disabled:border-brand-primary',
         shop: 'bg-brand-yellow-default hover:bg-brand-yellow-dark text-brand-light-gray-300 disabled:bg-brand-light-gray-200'
      }
   },
   defaultVariants: {
      size: "medium",
      type: "primary"
   }
});

function ButtonRoot({ children, size, type, className, typeButton, ...props }) {
   const defaultClass = ButtonVariants({ size, type });
   const mergedClass = twMerge(defaultClass, className);

   return (
      <button className={mergedClass} {...props}>
         {children}
      </button >
   );
}

export default ButtonRoot;
