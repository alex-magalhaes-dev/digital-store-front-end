export default function RadioButton({ text, value = text, name = "radio-group" }) {
   return (
      <label className="flex items-center gap-2 text-sm font-medium">
         <input
            className="w-5 h-5 rounded-full"
            type="radio"
            value={value}
            name={ name}
         />
         <span>
            {text}
         </span>
      </label>
   )
}