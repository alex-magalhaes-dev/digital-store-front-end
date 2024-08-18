export default function SearchCount({ query = 'produtos', quantity = 0 }) {
   return (
      <div className="text-base flex gap-2">
         <span className="font-bold">
            Resultados
            {
               query && <span> para "{query}"</span>
            }
         </span>
         <span>-</span>
         <span>{quantity} produtos</span>
      </div >
   )
}