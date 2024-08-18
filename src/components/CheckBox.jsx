export default function CheckBox({ text, value = text, name = value }) {
   return (
      <label className="flex items-center gap-2 text-sm font-medium">
         <input
            className="w-5 h-5 rounded-sm"
            type="checkbox"
            value={value}
            name={value}
         />
         <span>
            {text}
         </span>
      </label>
   )
}