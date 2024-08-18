export default function Breadcrump({ category, branding, name }) {
   return (
      <div className="flex items-center justify-start gap-2 font-medium text-sm">
         <span className="font-bold">Home</span>
         <span>/</span>
         <span>Produtos</span>
         <span>/</span>
         <span>{category}</span>
         <span>/</span>
         <span>{branding}</span>
         <span>/</span>
         <span>{name}</span>
      </div>
   )
}